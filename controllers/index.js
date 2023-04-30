const router = require('express').Router();

//const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes');

router.use('/main', mainRoutes);
//router.use('api')

module.exports = router;