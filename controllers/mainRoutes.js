const router = require('express').Router();
const { Animal, Breed, Tags, Type, User } = require('../models');
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
   try {
      const animaldata = await Animal.findAll({
         include: [
            {
               model: Type,
               attributes: ['type'],
            },
            {
               model: Breed,
               attributes: ['breed']
            }]

      });

      const animals = animaldata.map((animal) => animal.get({ plain: true }));


      res.render('homepageg', {
         animals,
         logged_in: req.session.logged_in
      });
   } catch (err) {
      res.status(400).json(err)
   }
})

router.get('/animal/:id', async (req, res) => {
   try {
      const animalData = await Animal.findByPk(req.params.id, {

         include:
            [{
               model: Type,
               attribute: ['type']
            },
            {
               model: Breed,
               attribute: ['breed']
            },
            {
               model: Tags,
               attribute: ['tag_name']
            }]
      });



      const animal = animalData.get({ plain: true });
      res.render('oneanimal', {
         ...animal,
         logged_in: req.session.logged_in
      });
      if (!animalData)
         res.render('invalidroute')

   } catch (err) {
      res.status(500).json(err)
   }

});



router.get('/breed/:id', async (req, res) => {
   try {
      const breedData = await Breed.findByPk(req.params.id, {

         include:
            [{
               model: Animal,
               attribute: ['name']
            }]
      });

      const breedname = breedData.breed;
      const breedanimals = breedData.animals.map((breedanimal) => breedanimal.get({ plain: true }));
      console.log(breedanimals)


      res.render('breeds', {
         breedname,
         breedanimals,
         logged_in: req.session.logged_in
      });



   } catch (err) {
      res.status(500).json(err)
   }

});

router.get('/tags/:id', async (req, res) => {
   try {
   
      const tagdata = await Tags.findByPk(req.params.id, {

         include:
            [{
               model: Animal,
               attribute: ['name']
            }]
      });

      
      // const taganimals = tagdata.animals.map((taganimal) => taganimal.get({ plain: true }));
      const tagname = tagdata.tag_name;
      const taganimals = tagdata.animals.map((taganimal) => taganimal.get({ plain: true }))


      res.render('tags', {
         tagname,
         taganimals,
         logged_in: req.session.logged_in
      });

   } catch (err) {
      res.status(500).json(err)
   }

});

/*router.get('/tags', async (req, res) => {
    try{
        const tagdata = await Tags.findAll({
            include:
              [{ model: Animal }]
          });
        res.status(200).json(tagdata)
    }catch(err){
        res.status(400).json(err)
    }
})


  
  })
  router.get('/types', async (req, res) => {
   try{
       const typedata = await Type.findAll({
           include:
             [{ model: Animal}, {model:Breed}]
         });
       res.status(200).json(typedata)
   }catch(err){
       res.status(400).json(err)
   }
})*/

router.get('/type/:id', async (req, res) => {
   try {
     const typeData = await Type.findByPk(req.params.id, {
 
       include:
         [{ model: Breed }, { model: Animal}]
     });
     console.log(typeData)
     const typename = typeData.type;
      const typeanimals = typeData.animals.map((typeanimal) => typeanimal.get({ plain: true }))


      res.render('types', {
         typename,
         typeanimals,
         logged_in: req.session.logged_in
      });

   } catch (err) {
      res.status(500).json(err)
   }

});

module.exports = router;