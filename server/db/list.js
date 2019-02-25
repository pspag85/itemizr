const Sequelize = require('sequelize')
const db = require('./database')

const List = db.define('lists', {
  date: {
    type: Sequelize.DATE,//this usted to be string
    allowNull: false
  },
  mostRecentEditor: {
    type: Sequelize.STRING,
  }
})

module.exports = List
