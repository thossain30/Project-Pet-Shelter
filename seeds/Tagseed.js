const {Tags} = require('../models');

const tagData = [
    {
        tag_name:'small',
    },
    {
        tag_name:'large',
    },
    {
        tag_name:'young',
    },
    {
        tag_name:'old',
    },
    {
        tag_name:'vaccinated',
    },
    {
        tag_name:'unvaccinated',
    },
    {
        tag_name:'friendly',
    }
]

const seedTags = () => Tags.bulkCreate(tagData);

module.exports = seedTags;