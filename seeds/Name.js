const {Animal} = require('../models');

const animalData = [
    {
        animal_name: 'Fluffy',
        typeid: 1,
        breedid: 2,
        adoptdate:2024-06-21,
        
    },
    {
        animal_name: 'Max',
        typeid: 1,
        breedid: 1,
        adoptdate:2023-06-21,
        
    },
    {
        animal_name: 'Eeyore',
        typeid: 2,
        breedid: 3,
        adoptdate:2023-08-21,
        
    },
    {
        animal_name: 'Matilda',
        typeid: 2,
        breedid: 4,
        adoptdate:2023-09-30,
    
    },
]

const animalSeeds = () => Animal.bulkCreate(animalData);

module.exports = animalSeeds;