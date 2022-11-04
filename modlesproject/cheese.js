const {DataTypes, Model} =require('sequelize')
const sequelize = require('../databaseproject/dbcb')

class Cheese extends Model { }

Cheese.init({
     
        title: DataTypes.STRING,
    
        description: DataTypes.STRING

}, { sequelize }) 

module.exports = Cheese
