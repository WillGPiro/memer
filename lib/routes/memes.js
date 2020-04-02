const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()
  .post('/', (req, res, next) => {
    Meme
      .create(req.body)
      .then(meme => res.send(meme))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Meme
      .findById(req.params.id)
      .populate('meme')
      .then(meme => res.send(meme))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Meme
      .find()
      .then(meme => res.send(meme))
      .catch(next);
  })
  
  .patch('/:id', (req, res, next) => {
    // console.log('====', (req, res));
    Meme
      .findByIdAndUpdate(req.params.id, { name: req.body }, { new: true })
      .then(meme => res.send(meme))
      .catch(next);
  })
  
  .delete('/:id', (req, res, next) => {
    Meme
      .findByIdAndDelete(req.params.id)
      .then(Meme => res.send(Meme))
      .catch(next);
  });
  
 
