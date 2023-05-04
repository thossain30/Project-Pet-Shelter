const router = require('express').Router();
const { Animal, Tags} = require('../../models');

// ability to create new tags
router.post('/tag', async (req, res) => {
  try {
    const tagData = await Tags.create({
      ...req.body,
    });

    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TESTING ONLY - getting all tag information
router.get('/tag', async (req, res) => {
  try{
    console.log("****************GETTING ALL INFO****************")
    const allTags = await Tags.findAll();
    res.status(200).json(allTags); 
  }catch(err){
    res.status(500).json(err);
  }

});

// deleting by id
router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try{
    const tagData = await Tags.destroy({
      where: { id: req.params.id}
    });

    if(!tagData){
      res.status(404).json({message: 'No tag found with this id'});
    }
    res.status(200).json(tagData)
  }catch(err){
    res.status(500).json(err);
  }
});


  module.exports = router;