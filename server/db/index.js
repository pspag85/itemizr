'use strict';

const Sequelize = require('sequelize');
const db = require('./database');
const User = require('./user');
const Vendor = require('./vendor');
const Product = require('./product');
const Category = require('./category');

Vendor.belongsTo(User);
User.hasMany(Vendor);

Product.belongsTo(Vendor);
Vendor.hasMany(Product);

Category.belongsTo(User);
User.hasMany(Category);

Product.belongsTo(Category);
Category.hasMany(Product);

User.hasMany(User, {as: 'employees'});

module.exports = {
  db,
  User,
  Vendor,
  Product,
  Category,
};
