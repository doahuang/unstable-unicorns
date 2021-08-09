const Deck = require('../types/deck');
const babyUnicorns = require('./unicorns/baby_unicorns');
const basicUnicorns = require('./unicorns/basic_unicorns');
const magicalUnicorns = require('./unicorns/magical_unicorns');
const magics = require('./magics');
const upgrades = require('./upgrades');
const downgrades = require('./downgrades');
const instants = require('./instants');

module.exports = new Deck([
  ...babyUnicorns,
  ...basicUnicorns,
  ...magicalUnicorns,
  ...magics,
  ...upgrades,
  ...downgrades,
  ...instants,
]);
