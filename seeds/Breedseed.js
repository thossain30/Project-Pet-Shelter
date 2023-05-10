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
        breed:'unkown bird',
        typeid:3
    },
    {
        breed:'Pug',
        typeid:1
    },
    {
        breed:'Cane Corso',
        typeid:1
    },
    {
        breed:'Boykin Spaniel',
        typeid:1
    },
    {
        breed:'Golden Retriever',
        typeid:1
    },
    {
        breed:'Beagle',
        typeid:2
    },
    {
        breed:'Birman',
        typeid:2
    },
    {
        breed:'Bombay',
        typeid:2
    },
    {
        breed:'Japanese Bobtail',
        typeid:2
    },
    {
        breed:'Scottish Fold',
        typeid:2
    },
    {
        breed:'Siberian',
        typeid:2
    },
    {
        breed:'Cockatoo',
        typeid:3
    },
    {
        breed:'Hyacinth Macaw',
        typeid:3
    },
    {
        breed:'Dove',
        typeid:3
    },
    {
        breed:'Parrotlet',
        typeid:3
    },
    {
        breed:'Hahns Macaw',
        typeid:3
    },

]

const breedCategories = () => Breed.bulkCreate(breedData);

module.exports = breedCategories;