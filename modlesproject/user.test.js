const { User, Cheese, Board } = require('./index')
const sequelize = require('../databaseproject/dbcb')

describe('User', () => {

})
beforeAll(async () => {
    await sequelize.sync({ force: true })

})

test('a user can have multipule boards', async () => {
    const user = await User.create({ email: 'danielle@live.com', name: 'danielle' })
    const board = await Board.create({type:'american cheeseboard', description: 'can hold a nice assortment of cheese and meats'})
    const cheese = await Cheese.create({title: 'mozerella', desription: 'soft shiney and smooth in texture' })
    expect(user.name).toBe('Danielle')
    expect(user.title).toBeTruthy()
})





