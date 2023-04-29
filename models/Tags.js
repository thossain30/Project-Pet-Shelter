const {Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection.js')
const { INTEGER } = require ('sequelize')

class Tags extends Model{}


Tags.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false, 
            primaryKey: true
        }, type_name: {
            type: DataTypes.STRING,
            allowNull: false,

        }
},
{
sequelize,
timestamps: false,
freezeTableName: true,
modelName: 'tags'
}

)

module.exports = Tags;