const {Breed} = require('../models');

const breedData = [
    {
        breed:'labrador',
        type_id: 1
    },
    {
        breed:'mix',
        type_id:1
    },
    {
        breed:'siamese',
        type_id:2
    },
    {
        breed:'mix',
        type_id:2
    }
]

const breedCategories = () => Breed.bulkCreate(breedData);

module.exports = breedCategories;