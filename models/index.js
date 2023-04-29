const Type = require('./Type');
const Tags = require('./Tags');
const Animal = require('./Animal');
const Breed = require('./Breed');
const AnimalTag = require('./AnimalTag')
const User = require('./User')



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
      model: animalTag,
      unique: false
    }
  })


  
  Tags.belongsToMany(Animal, {
    through: {
      model: animalTag,
      unique: false
    }
  })

  User.hasMany(Animal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Animal.belongsTo(User, {
    foreignKey: 'user_id'
  });
  

module.exports = {
  Animal,
  Breed,
  Tags,
  Type,
  AnimalTag,
  User,
};
