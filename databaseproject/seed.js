const { User, Cheese, Board } = require('../modlesproject/index')
const sequelize = require('./dbcb')

async function seed() {

    await sequelize.sync({
        force: true
    })

    await User.bulkCreate([
        {
            name: 'Danielle',
            email: 'danielle@live.com'

        },
        {
            name: 'Ash',
            email: 'ash@live.com'
        },
        {
            name: 'Rob',
            email: 'rob@live.com'
        }

    ])


    await Cheese.bulkCreate([
        {
            title: 'mozzarella',
            description: 'soft shiney and smooth in texture'
        },
        {
            title: 'feta',
            description: 'is a brined curd white cheese made in Greece from sheep.'
        },
        {
            title: 'cheddar',
            description: 'Cheddar originates from the English village of Cheddar in Somerset.'
        },
    ])

    await Board.bulkCreate([
        {
            title:'American cheese board',
            description: 'can hold a nice assortment of cheese and meats',
            rating: 2
        },
        {
            title:'English Cheese Board',
            description: 'perfect for boxing day and beyond',
            rating: 9
        },
        {
            title: 'French Cheese Board',
            description: 'bonjour',
            rating: 10

        }


    ])
}

seed()
