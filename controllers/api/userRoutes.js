const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
  router.post('/lskdfjlsdjgy', async (req, res) => {
  try {
    
    const userData = await User.create(req.body);
    console.log("****************SAVING INFORMATION TO DATABASE 1****************")
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      req.session.username = userData.userName;
      req.session.email = userData.email;
      req.session.password = userData.passwd;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// testing
router.post('/login', async (req, res) => {
  try {
    const userData = await User.create({
      ...req.body,

      //user_id: req.session.user_id,
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get('/login', async () => {console.log("hello")})

router.post('/oooy', async (req, res) =>{
    try{
      console.log("****************SAVING INFORMATION TO DATABASE 2****************")
      const userData = await User.create(req.body);

    req.session.save(() => {
      // req.session.user_id = userData.id;
      // req.session.logged_in = true;

      req.session.username = userData.userName;
      req.session.email = userData.email;
      req.session.password = userData.passwd;

      res.status(200).json(userData);
    });
        // console.log("post body:", req.body);
        // const newUser = await User.create(req.body);
            //...req.body,
            //id: req.session.id,
       // });
      // console.log(req.body);
        // res.status(200).json(User);
    }
    catch(err)
    {
        res.status(400).json(err)
    }
    
})


// get all products
router.get('/', async (req, res) => {
    try{
      console.log("****************GETTING ALL INFO****************")
      const allUsers = await User.findAll();
      res.status(200).json(allUsers); 
    }catch(err){
      res.status(500).json(err);
    }
    // find all products
    // be sure to include its associated Category and Tag data
  });




router.delete('/:id', async (req, res) => {
    // delete one product by its `id` value
    try{
      const userData = await User.destroy({
        where: { id: req.params.id}
      });
  
      if(!userData){
        res.status(404).json({message: 'No product found with this id'});
      }
      res.status(200).json(userData)
    }catch(err){
      res.status(500).json(err);
    }
  });

module.exports = router;