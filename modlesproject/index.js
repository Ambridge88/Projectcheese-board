const Cheese = require('./cheese')
const User = require('../databaseproject/user')
const Board = require('./board')

//one to many
User.hasMany(Board)
Board.belongsTo(User)

//many to many 
Board.belongsToMany(Cheese, {through: 'cheese_board'})
Cheese.belongsToMany(Board, {through: 'cheese_board'})


module.exports = {Cheese, User, Board}