const router = require('express').Router();

//const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes');
const apiRoutes = require('./api');

router.use('/', mainRoutes);
router.use('/api', apiRoutes);
//router.use('api')

module.exports = router;