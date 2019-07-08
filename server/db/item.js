const Sequelize = require('sequelize')
const db = require('./database')

const Item = db.define('items', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  onHand:{
    type: Sequelize.INTEGER,
    allowNull: true
  },
  par:{
    type: Sequelize.INTEGER,
    allowNull: true
  },
  orderQty:{
    type: Sequelize.INTEGER,
    allowNull: true
  },
  saved: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Item
