const router = require('express').Router();
const animalRoutes = require('./AnimalRoutes');
const breedRoutes = require('./breedRoutes');
const tagRoutes = require('./tagRoutes')
const typeRoutes = require('./typeRoutes')
const userRoutes = require('./userRoutes')

router.use('/animals', animalRoutes);
router.use('/breeds', breedRoutes);
router.use('/tags', tagRoutes);
router.use('/type', typeRoutes);
router.use('/users', userRoutes);

module.exports = router;
