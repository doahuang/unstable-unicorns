const { genDemoCards } = require('../utils');
const { Downgrade, Magic, Instant, Upgrade } = require('../types');
const { BabyUnicorn, BasicUnicorn, MagicalUnicorn } = require('../unicorns');
const { baby, basic, magical } = require('./unicorn');

module.exports = {
    unicorn: {
        baby: genDemoCards(baby, BabyUnicorn),
        basic: genDemoCards(basic, BasicUnicorn),
        magical: genDemoCards(magical, MagicalUnicorn),
    },
    magic: genDemoCards(require('./magic'), Magic),
    upgrade: genDemoCards(require('./upgrade'), Upgrade),
    downgrade: genDemoCards(require('./downgrade'), Downgrade),
    instant: genDemoCards(require('./instant'), Instant),
};
