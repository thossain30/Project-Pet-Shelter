const router = require('express').Router();
const { Animal, Breed,  Type} = require('../../models');


router.post('/breed', async (req, res) => {
  try {
    const breedData = await Breed.create({
      ...req.body,
    });

    res.status(200).json(breedData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TESTING ONLY
router.get('/breed', async (req, res) => {
  try{
    console.log("****************GETTING ALL INFO****************")
    const allBreeds = await Breed.findAll();
    res.status(200).json(allBreeds); 
  }catch(err){
    res.status(500).json(err);
  }

});

// deleting by id
router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try{
    const breedData = await Tags.destroy({
      where: { id: req.params.id}
    });

    if(!breedData){
      res.status(404).json({message: 'No tag found with this id'});
    }
    res.status(200).json(breedData)
  }catch(err){
    res.status(500).json(err);
  }
});

  module.exports = router;