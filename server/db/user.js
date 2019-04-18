const Sequelize = require('sequelize')
const db = require('./database')

const User = db.define('users', {
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false,
    unique: true,
    validate: {len: [4,90]}
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {len: [2,100]}
  }
})

module.exports = User
