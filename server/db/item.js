const Sequelize = require('sequelize')
const db = require('./database')

const Item = db.define('items', {
  name: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  onHand:{
    type: Sequelize.STRING,
    defaultValue: ''
  },
  par:{
    type: Sequelize.STRING,
    defaultValue: ''
  },
  orderQty:{
    type: Sequelize.STRING,
    defaultValue: ''
  }
})

module.exports = Item
