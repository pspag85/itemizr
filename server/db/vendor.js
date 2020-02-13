const Sequelize = require('sequelize')
const db = require('./database')

const Vendor = db.define('vendors', {
  name: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  email: {
    type: Sequelize.STRING,
    defaultValue: '',
    isEmail: true
  },
  phone: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
})

module.exports = Vendor
