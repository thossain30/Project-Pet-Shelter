const breedCategories = require('./Breedseed');
const animalSeeds = require('./Animalseed');
const seedTags = require('./Tagseed');
const seedType= require('./Typeseed');
const animalTag = require('./AnimalTagseeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedType();
  console.log('\n----- Types SEEDED -----\n');
  await breedCategories();
  console.log('\n----- Breeds SEEDED -----\n');

 

  await seedTags();
  console.log('\n----- Tags SEEDED -----\n');

  

  

  await animalSeeds();
  console.log('\n----- Animals SEEDED -----\n');

  await animalTag();
  console.log('\n ----AnimalTags SEEDED ----\n')

  process.exit(0);
};

seedAll();