const Sequelize = require('sequelize')
const db = require('./database')

const Product = db.define('product', {
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

module.exports = Product
