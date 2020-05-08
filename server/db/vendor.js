const Sequelize = require('sequelize');
const db = require('./database');

const Vendor = db.define('vendors', {
  name: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  email: {
    type: Sequelize.STRING,
    defaultValue: '',
    isEmail: true,
  },
  phone: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  firstName: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  lastName: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  address_1: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  address_2: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  city: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  state: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  zipcode: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
});

module.exports = Vendor;
