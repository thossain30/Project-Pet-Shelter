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
            model: 'type',
            key: 'id'
        }, breedid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'breed',
                key: 'id'
            }

    }, adoptdate: {
        type: DataTypes.DATEONLY,
        allowNull:false

    }, picUrl:{
        type:DataTypes.STRING,
        allowNull: true,
        validate:{
            isUrl: true
        }
    }, desc:{
        type:DataTypes.TEXT,
        allowNull:true,

    }
    /* tags: {
        type: DataTypes.INTEGER,
        references:{
            model:'tag',
            key: 'id'
        }*/


    }
,
{
sequelize,
timestamps: false,
freezeTableName: true,
modelName: 'animal'
}

)

module.exports = Animal;