const { DataTypes, Model } = require('sequelize')
const sequelize = require('./dbcb.js')


class User extends Model { }

User.init({

    name: DataTypes.STRING,

    email: DataTypes.STRING


}, { sequelize })


module.exports = User
