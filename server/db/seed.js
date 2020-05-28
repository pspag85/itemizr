const {red, bgMagenta} = require('chalk');
const {Unit, db} = require('./index');

const defaultUnitNames = [
  'Unit',
  'Case',
  'Bag',
  'Tray',
  'Crate',
  'Lb.',
  'Oz.',
  'Gal.',
  'Mil.',
  'Ltr.',
];

const defaultUnitRows = defaultUnitNames.map((name) => ({name}));

const seed = async (num) => {
  try {
    await Unit.bulkCreate(defaultUnitRows);
    console.log(bgMagenta('Seeding success!'));
  } catch (err) {
    console.error(red('Seed failed!'));
    console.error(err);
    db.close();
  }
};

module.exports = seed;
