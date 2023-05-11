const router = require('express').Router();
const { Animal} = require('../../models');


router.post('/animal', async (req, res) => {
  try {
    const animalData = await Animal.create({
      ...req.body,
    });


    res.status(200).json(animalData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// TESTING ONLY
router.get('/animal', async (req, res) => {
  try{
    console.log("****************GETTING ALL INFO****************")
    const allAnimal = await Animal.findAll();
    res.status(200).json(allAnimal);
  }catch(err){
    res.status(500).json(err);
  }


});


// deleting by id
router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try{
    const animalData = await Animal.destroy({
      where: { id: req.params.id}
    });


    if(!animalData){
      res.status(404).json({message: 'No tag found with this id'});
    }
    res.status(200).json(animalData)
  }catch(err){
    res.status(500).json(err);
  }
});






  module.exports = router;
