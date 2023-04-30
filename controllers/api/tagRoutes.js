const router = require('express').Router();
const { Animal, Tags} = require('../../models');


router.get('/', async (req, res) => {
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

router.get('/:id', async (req, res) => {
    try {
      const tagData = await Tags.findByPk(req.params.id, {
  
        include:
          [{ model: Animal}]
      });
      if (!tagData) {
        res.status(404).json({ message: `No ID found for ${req.params.id}` })
      }
      res.status(200).json(tagData)
    } catch (err) {
      res.status(500).json(err)
    }
  
  });

  module.exports = router;