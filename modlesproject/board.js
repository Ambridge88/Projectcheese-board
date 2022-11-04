const { DataTypes, Model } = require('sequelize')
const sequelize = require('../databaseproject/dbcb')

class Board extends Model { }

Board.init({
    title: 
        DataTypes.STRING,

    description:
        DataTypes.STRING,


    rating: 
            DataTypes.NUMBER

        }, { sequelize })




module.exports = Board


