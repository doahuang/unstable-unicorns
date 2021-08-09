const deck = require('./deck');
const nursery = require('./nursery');
const Discard = require('./types/discard');
const Stable = require('./types/stable');

const discard = new Discard();
const stable = new Stable();
console.log(deck, nursery, discard, stable);
