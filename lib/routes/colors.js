const { Router } = require('express');
const Color = require('../models/Color');

module.exports = Router()
  .post('/', (req, res, next) => {
    Color
      .create(req.body)
      .then(color => res.send(color))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Color
      .find()
      .then(color => res.send(color))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Color
      .findById(req.params.id)
      .then(color => res.send(color))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    Color
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(color => res.send(color))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Color
      .findByIdAndDelete(req.params.id)
      .then(color => res.send(color))
      .catch(next);
  });

