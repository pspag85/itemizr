const Sequelize = require('sequelize')
const db = require('./database')

const List = db.define('lists', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: 'MY LIST'
  },
  lastEditedBy: {
    type: Sequelize.TEXT
  }
})

module.exports = List
