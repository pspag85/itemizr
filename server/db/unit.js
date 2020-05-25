const Sequelize = require('sequelize');
const db = require('./database');

const Unit = db.define('unit', {
  name: {
    type: Sequelize.STRING,
    defaultValue: 'Unit',
    allowNull: false,
  },
});

module.exports = Unit;
