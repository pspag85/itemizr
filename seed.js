const {User, List, Item, db} = require('./server/db')//put USER back in here
const {red, bgMagenta} = require('chalk')

const userData = [
  {
    email: 'p@mail.com',
    password: '111'
  },
  {
    email: 'j@mail.com',
    password: '222'
  },
  {
    email: 'c@mail.com',
    password: '333'
  }
]

let now = new Date()
const date1 = now.setDate(now.getDate() - 5)
const date2 = now.setDate(now.getDate() - 10)
const date3 = now.setDate(now.getDate() - 20)
const date4 = now.setDate(now.getDate() - 30)

const listData = [
  {
    date: date4,
    items: [
      {
        id: 1,
        name: 'pickles',
        onHand: 25,
        par: 50,
        orderQty: 25
      },
      {
        id: 2,
        name: 'potatoes',
        onHand: 100,
        par: 200,
        orderQty: 100
      },
      {
        id: 3,
        name: 'oranges',
        onHand: 30,
        par: 40,
        orderQty: 10
      },
      {
        id: 4,
        name: 'chicken thighs',
        onHand: 20,
        par: 50,
        orderQty: 30
      }
    ]
  },
  {
    date: date3,
    items: [
      {
        id: 3,
        name: 'oranges',
        onHand: 20,
        par: 40,
        orderQty: 20
      },
      {
        id: 4,
        name: 'chicken thighs',
        onHand: 45,
        par: 50,
        orderQty: 5
      },
      {
        id: 5,
        name: 'apricots',
        onHand: 10,
        par: 15,
        orderQty: 5
      }
    ]
  },
  {
    date: date2,
    items: [
      {
        id: 6,
        name: 'steaks',
        onHand: 10,
        par: 20,
        orderQty: 10
      },
      {
        id: 7,
        name: 'snapper',
        onHand: 20,
        par: 40,
        orderQty: 20
      },
      {
        id: 8,
        name: 'pineapple juice',
        onHand: 0,
        par: 10,
        orderQty: 10
      },
      {
        id: 9,
        name: 'asparagus',
        onHand: 30,
        par: 40,
        orderQty: 10
      },
      {
        id: 10,
        name: 'avocado',
        onHand: 25,
        par: 30,
        orderQty: 5
      }
    ]
  },
  {
    date: date1,
    items: []
  }
]

const itemData = [
  {
    name: 'apples',
    onHand: 40,
    par: 50,
    orderQty: 10
  },
  {
    name: 'bananas',
    onHand: 10,
    par: 15,
    orderQty: 5
  }
]

const seed = async n => {
  try {
    await db.sync({force: true})
    await User.bulkCreate(userData)
    await List.bulkCreate(listData)
    await Item.bulkCreate(itemData)
    console.log(bgMagenta('Seeding success!'))
    db.close()
  } catch(err) {
    console.error(err)
  }
}

seed(20)
  .catch(err => {
    console.error(red('Seed failed!'))
    console.error(err)
    db.close()
  }
)
