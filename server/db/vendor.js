const Sequelize = require('sequelize')
const db = require('./database')

const Vendor = db.define('vendors', {
  name: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  contact: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
})

module.exports = Vendor
