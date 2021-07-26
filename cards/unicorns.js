const BasicUnicorn = require('../types/basic_unicorn');
const babyUnicorns = require('./unicorns/baby_unicorns');
const basicUnicorns = require('./unicorns/basic_unicorns');
const magicalUnicorns = require('./unicorns/magical_unicorns');

module.exports = [
  ...babyUnicorns,
  ...basicUnicorns,
  ...basicUnicorns,
  ...basicUnicorns,
  new BasicUnicorn(
    'This card has no special powers, but it sure is cute!',
    'Basic Narwhal'
  ),
  ...magicalUnicorns,
];
