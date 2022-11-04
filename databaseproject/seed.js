const { User, Cheese, Board } = require('../modlesproject/index')
const sequelize = require('./dbcb')

async function seed() {

    await sequelize.sync({
        force: true
    })

    await User.bulkCreate([
        {
            name: 'danielle',
            email: 'danielle@live.com'

        },
        {
            name: 'Ash',
            email: 'ash@live.com'
        },
        {
            name: 'rob',
            email: 'rob@live.com'
        }

    ])


    await Cheese.bulkCreate([
        {
            title: 'mozzarella',
            description: 'hello'
        },
        {
            title: 'feta',
            description: 'hello'
        },
        {
            title: 'cheddar',
            description: 'hello'
        },
    ])

    await Board.bulkCreate([
        {title:'hello',
        description: 'helllloo',
        rating: 7}


    ])
}

seed()
