const { User, Cheese, Board } = require('./index')
const sequelize = require('../databaseproject/dbcb')

describe('User', () => {

})
beforeAll(async () => {
    await sequelize.sync({ force: true })

})

test('a user can be loaded with its boards',
async () => {
    const user = await User.create({ email: 'danielle@live.com', name: 'Danielle' })
    const board = await Board.create({type:'american cheeseboard', description: 'can hold a nice assortment of cheese and meats'})
    const cheese = await Cheese.create({title: 'mozzarella', description: 'soft shiney and smooth in texture' })
    // expect(user.name).toBe('Danielle')
    // expect(user.title).toBeTruthy()
    await board.addCheeses([mozzarella]);
    await board.addBoard(cheeseBoard)
})

test('a board can be loaded with many cheeses',
async () => {
    const Board1 = await Board.create({type: 'French Cheese Board', rating 10})
    const Cheese1 = await Cheese.create({title: 'feta', description: 'is a brined curd white cheese made in Greece from sheep.'})
    const Cheese2 = await Cheese.create({title: 'mozzarella', description: 'soft shiney and smooth in texture'})
    await Board1.addCheeses([Cheese1, Cheese2])
    const BoardJoin  = await Board.findAll((include: [{ Model: Cheese}]})
    const checkBoard = await boardJoin.toJson()
expect(await checkBoard.Cheeses.length).toBeTruthy(10)
expect(await Board1.cheese1.toBeTruthy())
}) 






