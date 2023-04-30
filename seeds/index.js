const breedCategories = require('./Breed');
const animalSeeds = require('./Name');
const seedTags = require('./Tag');
const seedType= require('./Type');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await breedCategories();
  console.log('\n----- Breeds SEEDED -----\n');

  await animalSeeds();
  console.log('\n----- Animals SEEDED -----\n');

  await seedTags();
  console.log('\n----- Tags SEEDED -----\n');

  await seedType();
  console.log('\n----- Types SEEDED -----\n');

  process.exit(0);
};

seedAll();