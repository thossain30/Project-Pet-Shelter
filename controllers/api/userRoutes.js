const router = require('express').Router();
const { User } = require('../../models');
const { findAll } = require('../../models/Type');
const withAuth = require('../../utils/auth');

//   router.post('/lskdfjlsdjgy', async (req, res) => {
//   try {
    
//     const userData = await User.create(req.body);
//     console.log("****************SAVING INFORMATION TO DATABASE 1****************")
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       req.session.username = userData.userName;
//       req.session.email = userData.email;
//       req.session.password = userData.passwd;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// testing
router.get('/user', async (req, res)=>{
  try{
  const userData = await User.findAll();
    res.status(200).json(userData);
  }catch(err){
    res.status(500).json(err);
  }

  }
)
router.post('/register', async (req, res) => {
  try {
    const userData = await User.create({
      ...req.body,
    });
    req.session.save(() => {
  
       req.session.logged_in = true;

      res.status(200).json(userData);
    })
  }catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      
      req.session.logged_in = true;
      
       res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



//add if logic to make sure that username and password is in db
// router.post('/login', async (req, res) => {
//   try {
//     //use findone to find user from user model. if user is not found, send message. if user is found - check the password to make sure it is in the database. 
//     // req.session.save ( logged_in =true)

//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// router.post('/oooy', async (req, res) =>{
//     try{
//       console.log("****************SAVING INFORMATION TO DATABASE 2****************")
//       const userData = await User.create(req.body);

//     req.session.save(() => {

//       req.session.username = userData.userName;
//       req.session.email = userData.email;
//       req.session.password = userData.passwd;

//       res.status(200).json(userData);
//     });
        
//     }
//     catch(err)
//     {
//         res.status(400).json(err)
//     }
    
// })


// // get all users
// router.get('/', async (req, res) => {
//     try{
//       console.log("****************GETTING ALL INFO****************")
//       const allUsers = await User.findAll();
//       res.status(200).json(allUsers); 
//     }catch(err){
//       res.status(500).json(err);
//     }
 
//   });



// deleting by id
router.delete('/:id', async (req, res) => {
    // delete one product by its `id` value
    try{
      const userData = await User.destroy({
        where: { id: req.params.id}
      });
  
      if(!userData){
        res.status(404).json({message: 'No user found with this id'});
      }
      res.status(200).json(userData)
    }catch(err){
      res.status(500).json(err);
    }
  });

module.exports = router;