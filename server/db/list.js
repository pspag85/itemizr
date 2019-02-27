const Sequelize = require('sequelize')
const db = require('./database')

const List = db.define('lists', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  mostRecentEditor: {
    type: Sequelize.STRING,
  }
})

module.exports = List
