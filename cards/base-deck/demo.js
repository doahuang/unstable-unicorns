const { genCards } = require('../utils');
const { Downgrade, Magic, Instant, Upgrade } = require('../types');
const { BabyUnicorn, BasicUnicorn, MagicalUnicorn } = require('../unicorns');
const { baby, basic, magical } = require('./unicorn');

module.exports = {
    unicorn: {
        baby: genCards(baby, BabyUnicorn, true),
        basic: genCards(basic, BasicUnicorn, true),
        magical: genCards(magical, MagicalUnicorn, true),
    },
    magic: genCards(require('./magic'), Magic, true),
    upgrade: genCards(require('./upgrade'), Upgrade, true),
    downgrade: genCards(require('./downgrade'), Downgrade, true),
    instant: genCards(require('./instant'), Instant, true),
};
