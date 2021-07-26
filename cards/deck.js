const Deck = require('../types/deck');
const unicorns = require('./unicorns');
const magics = require('./magics');
const upgrades = require('./upgrades');
const downgrades = require('./downgrades');
const instants = require('./instants');

module.exports = new Deck([
  ...unicorns,
  ...magics,
  ...upgrades,
  ...downgrades,
  ...instants,
]);
