'use strict'

const Sequelize = require('sequelize')
const db = require('./database')
const Item = require('./item')
const List = require('./list')
const Supplier = require('./supplier')
const User = require('./user')

List.belongsTo(User)
User.hasMany(List)

Supplier.belongsTo(User)
User.hasMany(Supplier)

Item.belongsTo(List)
List.hasMany(Item)

Item.belongsTo(Supplier)
Supplier.hasMany(Item, {as: 'products'})

List.belongsTo(Supplier)
Supplier.hasMany(List)

User.hasMany(User, {as: 'employees'})

module.exports = {
  db,
  Item,
  List,
  Supplier,
  User
}

