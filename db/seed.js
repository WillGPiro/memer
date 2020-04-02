const Meme = require('../lib/models/Meme');
const Color = require('../lib/models/Color');
const chance = require('chance').Chance();

// specifying the number of authors to create with our seed function
module.exports = async({ memesToCreate = 10, colorsToCreate } = {}) => {
  // creating  memes
  // creating an array of memes length
  // map through the array
  // -> for each item in the array we create an object with { top, image, and bottom fields }
  // for each author in the mapped array we create a author in our mongodb
  
  const image = ['http://placekitten.com/200/300', 'https://www.placecage.com/c/200/300'];

  await Meme.create([...Array(memesToCreate)].map(() => ({
    top: chance.name(),
    image: chance.pickone(image),
    bottom: chance.sentence({ words : 5 })
  })));

  const name = ['purple', 'yellow', 'green'];
  await Color.create([...Array(colorsToCreate)].map(() => ({
    name: chance.pickone(name),
    hex: chance.sentence(),
    red: chance.d100(),
    green: chance.d100(),
    blue: chance.d100()
  })));

};

