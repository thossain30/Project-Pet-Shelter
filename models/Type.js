const {Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection.js')
const { INTEGER } = require ('sequelize')

class Type extends Model{}


Type.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false, 
            primaryKey: true
        }, type: {
            type: DataTypes.STRING,
            allowNull: false,

        }, 
},
{
sequelize,
timestamps: false,
freezeTableName: true,
modelName: 'Type'
}

)

module.exports = Type;