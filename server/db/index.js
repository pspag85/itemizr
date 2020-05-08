'use strict';

const Sequelize = require('sequelize');
const db = require('./database');
const Product = require('./product');
const Vendor = require('./vendor');
const User = require('./user');

Vendor.belongsTo(User);
User.hasMany(Vendor);

Product.belongsTo(Vendor);
Vendor.hasMany(Product);

User.hasMany(User, {as: 'employees'});

module.exports = {
  db,
  Product,
  Vendor,
  User,
};
