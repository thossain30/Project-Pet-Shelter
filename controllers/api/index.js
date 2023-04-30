const router = require('express').Router();
const animalRoutes = require('./AnimalRoutes');
const breedRoutes = require('./breedRoutes');

router.use('/animals', animalRoutes);
router.use('/breeds', breedRoutes);

module.exports = router;
