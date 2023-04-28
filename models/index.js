const Type = require('./Type');
const Tags = require('./Tags');
const Animal = require('./Animal');
const Breed = require('./Breed');
const AnimalTag = require('./AnimalTag')



Animal.belongsTo(Type, {
    foreignKey: 'typeid',
    onDelete: 'CASCADE'
})


  Type.hasMany (Animal, {
    foreignKey: 'typeid'
  })

Animal.belongsTo(Breed, {
    foreignKey: 'breedid'
} )

Breed.hasMany (Animal, {
    foreignKey: 'breedid'
})

  Breed.belongsTo (Type, {
    foreignKey:'typeid'
  })

  Type.hasMany(Breed,{
    foreignKey: 'typeid'
  })

  Animal.belongsToMany(Tags, {
    through: {
      model: AnimalTag,
      unique: false
    }
  })
  
  
  Tags.belongsToMany(Animal, {
    through: {
      model: AnimalTag,
      unique: false
    }
  })

module.exports = {
  Animal,
  Breed,
  Tags,
  Type,
  AnimalTag,
};
