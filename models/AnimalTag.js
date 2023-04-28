const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const { INTEGER } = require('sequelize');

class AnimalTag extends Model {}

AnimalTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      allowNull: false,
      primaryKey: true
      
    }, animal_id:{
      type:DataTypes.INTEGER,
      references: {
        model: 'Animal',
        key: 'id'
      }
    }, tag_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'Tags',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'AnimalTag',
  }
);

module.exports = AnimalTag;
