const router = require('express').Router();
const { Animal, Breed, Tags, Type, User } = require('../models');
//const withAuth = require('../utils/auth');


// router.get('/layout/main', async (req, res) =>{
//    try{
//       const typeData = await Type.findAll();
//       const breedData = await Breed.findAll();
//       const tagData = await Tags.findAll();
//       const types = typeData.map((type) => type.get({plain:true}));
//       const breeds =breedData.map((breed)=> breed.get({plain:true}));
//       const tags =tagData.map((tag)=> tag.get({plain:true}))
//       console.log(tags),
//       res.render('', {
//          tags,
//          breeds,
//          types,
//          animals,
//          logged_in: req.session.logged_in
//       });
      
//    }catch(err){
//       res.status(500).json(err)
//    }

// })
router.get('/addpet', async (req, res) =>{
   try{
   const breedData = await Breed.findAll();
      
      const breeds = breedData.map((breed) => breed.get({plain:true}));
     

      console.log(breeds)

      res.render('addpet', {
         
         breeds,
         
         logged_in: req.session.logged_in
      });
   } catch (err) {
      res.status(500).json(err)
   }}
)
router.get('/login', async (req, res) => {
   try {
      console.log('rending res object', res);
      res.render('submitpage');
      // res.status(200).json();
   } catch (err) {
      res.status(500).json(err)
   }
})
router.get('/Adam', async (req, res) => {
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
     // For drop down menu
      const typeData = await Type.findAll();
      const breedData = await Breed.findAll();
      const tagData = await Tags.findAll();
      const types = typeData.map((type) => type.get({plain:true}));
      const breeds =breedData.map((breed)=> breed.get({plain:true}));
      const tags =tagData.map((tag)=> tag.get({plain:true}))
      console.log(tags)

      const animals = animaldata.map((animal) => animal.get({ plain: true }));

      res.render('allpets', {
         tags,
         breeds,
         types,
         animals,
         logged_in: req.session.logged_in
      });
   } catch (err) {
      res.status(500).json(err)
   }
})
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
            [{ model: Breed }, { model: Animal }]
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

router.get('/createtype', async (req, res) => {
   try {
      const type = await Type.findAll()

   } catch (err) {
      res.status(500).json(err)
   }
})

module.exports = router;