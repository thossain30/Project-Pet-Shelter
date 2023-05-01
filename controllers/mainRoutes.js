const router = require('express').Router();
//const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
   try{
      console.log('rending res object',res);
        res.render('homepage');
       // res.status(200).json();
   }catch(err)
   {
    res.status(500).json(err)
   }
})

module.exports = router;