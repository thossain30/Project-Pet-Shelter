const router = require('express').Router();
const { Animal, Breed, Tags, Type, User} = require('../models');
//const withAuth = require('../utils/auth');


/*router.get('/', async (req, res) => {
   try{
      console.log('rending res object',res);
        res.render('homepage');
       // res.status(200).json();
   }catch(err)
   {
    res.status(500).json(err)
   }
})*/

router.get('/', async (req, res) => {
   try{
       const animaldata = await Animal.findAll({
           include: [
           {
            model: Type,
            attributes: ['type'],
          },
          {
            model:Breed,
            attributes: ['breed']
          }]
             
         });
      
         const animals= animaldata.map((animal) => animal.get({ plain: true }));

         
        res.render('homepageg', { 
            animals, 
            logged_in: req.session.logged_in 
          });
        } catch(err){
       res.status(400).json(err)
   }
})

router.get('/animal/:id', async (req, res) => {
   try {
     const animalData = await Animal.findByPk(req.params.id, {
 
       include:
         [{model:Type,
         attribute: ['type']},
         { model: Breed, 
         attribute:['breed']},
         { model: Tags,
         attribute: ['tag_name'] }]
     });
     
     
     
     const animal = animalData.get({ plain: true });
     res.render('oneanimal',{ 
      ... animal, 
      logged_in: req.session.logged_in 
    });
    if (!animalData) 
       res.render('invalidroute')
     
   } catch (err) {
     res.status(500).json(err)
   }
 
 });

module.exports = router;