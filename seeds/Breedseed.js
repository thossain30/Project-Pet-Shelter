const {Breed} = require('../models');

const breedData = [
    {
        breed:'labrador dog',
        typeid: 1
    },
    {
        breed:'unknown dog',
        typeid:1
    },
    {
        breed:'siamese cat',
        typeid:2
    },
    {
        breed:'unknown cat',
        typeid:2
    },
    {
        breed:'Bald Eagle',
        typeid:3
    },
    {
        breed:'unknown bird',
        typeid:3
    }
]

const breedCategories = () => Breed.bulkCreate(breedData);

module.exports = breedCategories;