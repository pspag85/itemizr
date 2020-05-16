const Sequelize = require('sequelize');
const db = require('./database');

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Category;
