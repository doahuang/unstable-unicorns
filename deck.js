const Deck = require('./types/deck');
const basicUnicorns = require('./cards/basic_unicorns');
const magicalUnicorns = require('./cards/magical_unicorns');
const magics = require('./cards/magics');
const upgrades = require('./cards/upgrades');
const downgrades = require('./cards/downgrades');
const instants = require('./cards/instants');

module.exports = new Deck([
  ...basicUnicorns,
  ...magicalUnicorns,
  ...magics,
  ...upgrades,
  ...downgrades,
  ...instants,
]);
