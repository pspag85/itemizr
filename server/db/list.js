const Sequelize = require('sequelize')
const db = require('./database')
//const Item = require('./item')

const List = db.define('lists', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Date.now()//using date for list name
  },
  items: { //items row is an array that can accept object
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
