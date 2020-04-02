const { getColor, getColors } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('color routes', () => {
  it('creates a color', () => {
    return request(app)
      .post('/api/v1/colors')
      .send({
        name: 'blue',
        hex: '621282',
        red: 120,
        green: 193,
        blue: 133
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'blue',
          hex: '621282',
          red: 120,
          green: 193,
          blue: 133,
          __v: 0
        });
      });
  });

  it('gets all colors', async() => {
    const colors = await getColors();

    return request(app)
      .get('/api/v1/colors')
      .then(res => {
        expect(res.body).toEqual(colors);
      });
  });

  it('gets a color by id', async() => {
    const color = await getColor();

    return request(app)
      .get(`/api/v1/colors/${color._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...color
        });
      }); 
  });

  it('updates a color by id', async() => {
    const color = await getColor();

    return request(app)
      .patch(`/api/v1/colors/${color._id}`)
      .send({
        name: 'green',
        hex: '621282',
        red: 120,
        green: 183,
        blue: 133
      })
      .then(res => {
        expect(res.body).toEqual({
          ...color,
          name: 'green',
          hex: '621282',
          red: 120,
          green: 183,
          blue: 133
        });
      });
  }); 

  it('deletes a color by id', async() => {
    const color = await getColor();

    return request(app)
      .delete(`/api/v1/colors/${color._id}`)
      .then(res => {
        expect(res.body).toEqual(color);
      });
  });


});


