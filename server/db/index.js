'use strict';

const db = require('./database');
const User = require('./user');
const Vendor = require('./vendor');
const Product = require('./product');
const Category = require('./category');
const Unit = require('./unit');

Vendor.belongsTo(User);
User.hasMany(Vendor);

Product.belongsTo(Vendor);
Vendor.hasMany(Product);

Category.belongsTo(User);
User.hasMany(Category);

Product.belongsTo(Category);
Category.hasMany(Product);

Unit.belongsTo(User);
User.hasMany(Unit);

Product.belongsTo(Unit);
Unit.hasMany(Product);

User.hasMany(User, {as: 'employees'});

module.exports = {
  db,
  User,
  Vendor,
  Product,
  Category,
  Unit,
};
