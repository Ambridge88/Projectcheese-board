const { User, Cheese, Board } = require('./index')
const sequelize = require('../databaseproject/dbcb')

// // describe('User', () => {

// })
beforeAll(async () => {
    await sequelize.sync({force: true })

})

test('there is a user model', async () => {
    const user = await User.create({name: 'test', email:'danielle@test.com'})
    expect(user.name).toBe('test')
})

test('a user can have many boards', async () => {
    const user = await User.create({
        name: 'test', 
        email: 'dtest@test.com'
    })
    const FrenchBoard = await Board.create({
        title: 'french',
        description:'the french',
        rating: 4
    })
    const englishBoard = await Board.create({
        title: 'english board',
        description:'english rose',
        rating: 4
    })
    
    await user.addBoards([FrenchBoard, englishBoard])
    const userWithBoards = await User.findByPk(user.id, {
        include: {
            model: Board
        }
    })
    
    expect(userWithBoards.Boards.length).toBe(2)
    expect(userWithBoards.Boards[0].title).toBe('french')
    expect(userWithBoards.Boards[1].title).toBe('english board')

    

})

test('the many to many assocations', async () => {
    const FrenchBoard = await Board.create({
        type: 'french',
        description:'the french',
        rating: 4
    })
    const englishBoard = await Board.create({
        type: 'english board',
        description:'english rose',
        rating: 4
    })
    const feta = await Cheese.create({
        title: 'Brie',
        description: 'white soft'
    })
    const mozzarella = await Cheese.create({
        title: 'mozzarella',
        description: 'white soft and smooth'
    })
    const cheddar = await Cheese.create({
        title: 'cheddar',
        description: 'orange in color nice on toast'
    })

    await englishBoard.addCheese([feta, mozzarella, cheddar])
    await FrenchBoard.addCheese([feta, mozzarella, cheddar])

    const board = await Board.findByPk(englishBoard.id, {
        include: {
            model: Cheese
            
        }
    })

    expect(board.Cheeses.length).toBe(3)
    const boards = await Board.findAll({
        include: {
            model: Cheese,
            required:true
        }
                })
    // expect(board[1].cheeses.length).toBe(3)
    expect(boards[0].Cheeses.length).toBe(3)
})
    
       








