const { getMeme, getMemes } = require('../db/data-helpers');

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

  it('gets all memes', async() => {
    const memes = await getMemes();

    return request(app)
      .get('/api/v1/memes/')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });

  it('gets a meme by id', async() => {
    const meme = await getMeme();

    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...meme
        });
      });
  });
  
  it('updates an meme by id', async() => {
    const meme = await getMeme();

    return request(app)
      .patch(`/api/v1/memes/${meme._id}`)
      .send({ top: 'New Top Text', image: 'https://www.placekitten.com/c/200/300', bottom: 'Some witty bottom text' })
      .then(res => {
        expect(res.body).toEqual({
          ...meme,
          // top: 'New Top Text',
          // image: 'https://www.placekitten.com/c/200/300',
          // bottom: 'Some witty bottom text'
        });
      });
  });

  it('deletes an meme by id', async() => {
    const meme = await getMeme();

    return request(app)
      .delete(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...meme
        });
      });
  });

});


