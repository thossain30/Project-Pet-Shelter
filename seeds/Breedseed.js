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
    }
]

const breedCategories = () => Breed.bulkCreate(breedData);

module.exports = breedCategories;