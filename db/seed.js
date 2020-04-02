const Meme = require('../lib/models/Meme');
const chance = require('chance').Chance();

// specifying the number of authors to create with our seed function
module.exports = async({ memesToCreate = 10 } = {}) => {
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
};

