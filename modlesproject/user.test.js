const { User, Cheese, Board } = require('./index')
const sequelize = require('../databaseproject/dbcb')

describe('User', () => {

})
beforeAll(async () => {
    await sequelize.sync({ force: true })

})

test('a user has a name and email', async () => {
    const user = await User.create({ email: 'test@test.com', name: 'Bob' })
    expect(user.name).toBe('Bob')
    expect(user.id).toBeTruthy()
})





