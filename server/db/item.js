const Sequelize = require('sequelize')
const db = require('./database')

const Item = db.define('items', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  onHand:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  par:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  orderQty:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Item
