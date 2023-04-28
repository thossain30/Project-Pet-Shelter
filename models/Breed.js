const {Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection.js')
const { INTEGER } = require ('sequelize')

class Breed extends Model{}


Breed.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false, 
            primaryKey: true
        }, breed: {
            type: DataTypes.STRING,
            allowNull: false,

        }, typeid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            model: 'Type',
            key: 'id'
       
}},
{
sequelize,
timestamps: false,
freezeTableName: true,
modelName: 'Breed'
}

)

module.exports = Breed;