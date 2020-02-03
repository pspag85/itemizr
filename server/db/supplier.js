const Sequelize = require('sequelize')
const db = require('./database')

const Supplier = db.define('suppliers', {
  name: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  contact: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
})

module.exports = Supplier
