const Sequelize = require('sequelize')
const db = require('./database')
//const Item = require('./item')

const List = db.define('lists', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = List
