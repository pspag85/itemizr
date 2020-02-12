'use strict'

const Sequelize = require('sequelize')
const db = require('./database')
const Item = require('./item')
const List = require('./list')
const Vendor = require('./vendor')
const User = require('./user')

List.belongsTo(User)
User.hasMany(List)

Vendor.belongsTo(User)
User.hasMany(Vendor)

Item.belongsTo(List)
List.hasMany(Item)

Item.belongsTo(Vendor)
Vendor.hasMany(Item, {as: 'products'})

List.belongsTo(Vendor)
Vendor.hasMany(List)

User.hasMany(User, {as: 'employees'})

module.exports = {
  db,
  Item,
  List,
  Vendor,
  User
}

