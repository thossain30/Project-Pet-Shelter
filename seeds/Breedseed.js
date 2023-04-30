const {Breed} = require('../models');

const breedData = [
    {
        breed:'labrador',
        typeid: 1
    },
    {
        breed:'mix',
        typeid:1
    },
    {
        breed:'siamese',
        typeid:2
    },
    {
        breed:'mix',
        typeid:2
    }
]

const breedCategories = () => Breed.bulkCreate(breedData);

module.exports = breedCategories;