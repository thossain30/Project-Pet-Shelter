const {Animal} = require('../models');

const animalData = [
    {
        name: 'Fluffy',
        typeid: 1,
        breedid: 2,
        adoptdate:2024-06-21,
        picUrl:"https://public.oed.com/wp-content/uploads/MicrosoftTeams-image-1-e1663849645910-1130x400.jpg",
        desc:"Fluffy was found at a Texaco early last year"
        
    },
    {
        name: 'Max',
        typeid: 1,
        breedid: 1,
        adoptdate:2023-06-21,
        picUrl:"https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-chocolate-lab-nationalgeographic_1154144.webp?w=768&h=432",
        desc: "Max was found behind Eats on Ponce"
        
    },
    {
        name: 'Eeyore',
        typeid: 2,
        breedid: 3,
        adoptdate:2023-08-21,
        picUrl: "https://cdn.mos.cms.futurecdn.net/3edtiu5BmNmLSyrgiWrdAM-1200-80.jpg.webp",
        desc: "Eeyore was found behind the Earl"
        
    },
    {
        name: 'Matilda',
        typeid: 2,
        breedid: 4,
        adoptdate:2023-09-30,
        picUrl: "https://geniusvets.s3.amazonaws.com/gv-cat-breeds/Mixed-Breed-Cat-2.jpg",
        desc: "Matilda was found behind Taqueria Del Sol"
    
    },
    {
        name: 'Floetry',
        typeid: 3,
        breedid: 5,
        adoptdate:2023-07-21,
        picUrl: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/3nationalgeographic_2758699.webp?w=1600&h=900",
        desc: "Floetry description"
    
    },
    {
        name: 'Triples - Nick, Nicole and Nancy',
        typeid: 3,
        breedid: 6,
        adoptdate:2023-08-14,
        picUrl: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/poy1.webp?w=1600&h=900",
        desc: "Nick and Nicole description"
    
    },
]

const animalSeeds = () => Animal.bulkCreate(animalData);

module.exports = animalSeeds;