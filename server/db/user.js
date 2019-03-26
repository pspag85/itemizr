const Sequelize = require('sequelize')
const db = require('./database')

const User = db.define('users', {
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = User
