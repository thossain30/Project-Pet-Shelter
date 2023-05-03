const {Animal} = require('../models');

const animalData = [
    {
        name: 'Fluffy',
        typeid: 1,
        breedid: 2,
        adoptdate:2024-06-21,
        picUrl:"https://public.oed.com/wp-content/uploads/MicrosoftTeams-image-1-e1663849645910-1130x400.jpg"
        
    },
    {
        name: 'Max',
        typeid: 1,
        breedid: 1,
        adoptdate:2023-06-21,
        picUrl:"https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-chocolate-lab-nationalgeographic_1154144.webp?w=768&h=432"
        
    },
    {
        name: 'Eeyore',
        typeid: 2,
        breedid: 3,
        adoptdate:2023-08-21,
        picUrl: "https://cdn.mos.cms.futurecdn.net/3edtiu5BmNmLSyrgiWrdAM-1200-80.jpg.webp"
        
    },
    {
        name: 'Matilda',
        typeid: 2,
        breedid: 4,
        adoptdate:2023-09-30,
        picUrl: "https://geniusvets.s3.amazonaws.com/gv-cat-breeds/Mixed-Breed-Cat-2.jpg"
    
    },
]

const animalSeeds = () => Animal.bulkCreate(animalData);

module.exports = animalSeeds;