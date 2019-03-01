const Sequelize = require('sequelize')
const db = require('./database')

const Item = db.define('items', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Item
