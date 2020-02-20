const Sequelize = require('sequelize')
const db = require('./database')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  category: {
    type: Sequelize.STRING,
  },
  unit: {
    type: Sequelize.FLOAT,
    defaultValue: 0.00
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

module.exports = Product
