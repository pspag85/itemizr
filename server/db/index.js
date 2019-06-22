'use strict'

const Sequelize = require('sequelize')
const db = require('./database')
const Item = require('./item')
const List = require('./list')
const User = require('./user')

List.belongsTo(User)
User.hasMany(List)

Item.belongsTo(List)
List.hasMany(Item, {as: 'items'})

User.hasMany(User, {as: 'employees'})

module.exports = {
  db,
  Item,
  List,
  User

}

