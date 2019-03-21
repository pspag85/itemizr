const Sequelize = require('sequelize')
const db = require('./database')

const List = db.define('lists', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  },
  items: {
    type: Sequelize.TEXT,
    get: function() {
      return JSON.parse(this.getDataValue('items'));
    },
    set: function(val) {
      return this.setDataValue('items', JSON.stringify(val));
    }
  }
})

module.exports = List
