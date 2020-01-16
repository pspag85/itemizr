const Sequelize = require('sequelize')
const db = require('./database')

const Item = db.define('items', {
  name: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  onHand:{
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  par:{
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  orderQty:{
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Item
