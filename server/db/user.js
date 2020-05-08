const Sequelize = require('sequelize');
const db = require('./database');

const User = db.define('users', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  business: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false,
    unique: true,
    validate: {len: [4, 90]},
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {len: [2, 100]},
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = User;
