const { getMeme } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('meme routes', () => {
  it('creates a meme', async() => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'Some witty top text',
        image: 'https://www.placecage.com/c/200/300',
        bottom: 'Some witty bottom text'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'Some witty top text',
          image: 'https://www.placecage.com/c/200/300',
          bottom: 'Some witty bottom text',
          __v: 0
        });
      });
  });

});


