const {Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection.js')
const { INTEGER } = require ('sequelize')

class Animal extends Model{}


Animal.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false, 
            primaryKey: true
        }, name: {
            type: DataTypes.STRING,
            allowNull: false,

        }, typeid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            model: 'Type',
            key: 'id'
        }, breedid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Breed',
                key: 'id'
            }

    }, adoptdate: {
        type: DataTypes.DATEONLY,
        allowNull:false

    }, tags: {
        type: DataTypes.INTEGER,
        references:{
            model:'Tag',
            key: 'id'
        }


    }
},
{
sequelize,
timestamps: false,
freezeTableName: true,
modelName: 'Animal'
}

)

module.exports = Animal;