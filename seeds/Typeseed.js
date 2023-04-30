const {Type} = require('../models');

const typeData = [
    {
        type:'dog',
    },
    {
        type:'cat',
    },
    {
        type:'bird',
    }
]

const seedType = () => Type.bulkCreate(typeData);

module.exports = seedType;