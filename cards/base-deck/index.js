const { genCards } = require('../utils');
const { Downgrade, Magic, Instant, Upgrade } = require('../types');
const { BabyUnicorn, BasicUnicorn, MagicalUnicorn } = require('../unicorns');
const { baby, basic, magical } = require('./unicorn');

module.exports = {
    deck: [
        ...genCards(require('./downgrade'), Downgrade),
        ...genCards(require('./instant'), Instant),
        ...genCards(require('./magic'), Magic),
        ...genCards(basic, BasicUnicorn),
        ...genCards(magical, MagicalUnicorn),
        ...genCards(require('./upgrade'), Upgrade),
    ],
    nursery: genCards(baby, BabyUnicorn),
};
