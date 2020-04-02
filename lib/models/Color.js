const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hex: {
    type: String,
    required: true
  },
  red: {
    type: Number,
    min: 1,
    max: 255,
    required: true
  },
  green: {
    type: Number,
    min: 1,
    max: 255,
    required: true
  },
  blue: {
    type: Number,
    min: 1,
    max: 255,
    required: true
  }
});

module.exports = mongoose.model('Color', colorSchema);

