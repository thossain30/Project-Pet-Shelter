const router = require('express').Router();
const { Animal, Breed, Tags, Type, User} = require('../../models');


router.get('/', async (req, res) => {
    try{
        const animaldata = await Animal.findAll({
            include:
              [{ model: Breed }, { model: Tags }, {model: Type}, {model:User}]
          });
        res.status(200).json(animaldata)
    }catch(err){
        res.status(400).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
      const animalData = await Animal.findByPk(req.params.id, {
  
        include:
          [{ model: Breed }, { model: Tags }, {model:Type}, {model: User}, {model:Tags}]
      });
      if (!animalData) {
        res.status(404).json({ message: `No ID found for ${req.params.id}` })
      }
      res.status(200).json(animalData)
    } catch (err) {
      res.status(500).json(err)
    }
  
  });

  module.exports = router;

