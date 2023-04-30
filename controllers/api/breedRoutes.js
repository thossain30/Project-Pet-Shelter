const router = require('express').Router();
const { Animal, Breed,  Type} = require('../../models');


router.get('/', async (req, res) => {
    try{
        const breedData = await Breed.findAll({
            include:
              [{ model: Breed },  {model: Type}]
          });
        res.status(200).json(breedData)
    }catch(err){
        res.status(400).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
      const breedData = await Breed.findByPk(req.params.id, {
  
        include:
          [{ model: Breed },  {model:Type}, {model: Animal}]
      });
      if (!breedData) {
        res.status(404).json({ message: `No ID found for ${req.params.id}` })
      }
      res.status(200).json(breedData)
    } catch (err) {
      res.status(500).json(err)
    }
  
  });

  module.exports = router;