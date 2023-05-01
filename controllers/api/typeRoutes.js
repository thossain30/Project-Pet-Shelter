const router = require('express').Router();
const { Animal, Breed, Type} = require('../../models');


router.get('/', async (req, res) => {
    try{
        const typedata = await Type.findAll({
            include:
              [{ model: Animal}, {model:Breed}]
          });
        res.status(200).json(typedata)
    }catch(err){
        res.status(400).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
      const typeData = await Type.findByPk(req.params.id, {
  
        include:
          [{ model: Breed }, { model: Animal}]
      });
      if (!typeData) {
        res.status(404).json({ message: `No ID found for ${req.params.id}` })
      }
      res.status(200).json(typeData)
    } catch (err) {
      res.status(500).json(err)
    }
  
  });

  module.exports = router;