const { Downgrade, Magic, Instant, Upgrade } = require('../types/cards');
const {
    BabyUnicorn,
    BasicUnicorn,
    MagicalUnicorn,
} = require('../types/unicorns');
const { genCards } = require('../../utils');
const downgrade = require('./downgrade');
const magic = require('./magic');
const instant = require('./instant');
const unicorn = require('./unicorn');
const upgrade = require('./upgrade');

module.exports = {
    edition: {
        deck: [
            ...genCards(downgrade, Downgrade),
            ...genCards(instant, Instant),
            ...genCards(magic, Magic),
            ...genCards(unicorn.basic, BasicUnicorn),
            ...genCards(unicorn.magical, MagicalUnicorn),
            ...genCards(upgrade, Upgrade),
        ],
        nursery: genCards(unicorn.baby, BabyUnicorn),
    },
    demo: {
        downgrade: genCards(downgrade, Downgrade, true),
        instant: genCards(instant, Instant, true),
        magic: genCards(magic, Magic, true),
        unicorn: {
            baby: genCards(unicorn.baby, BabyUnicorn, true),
            basic: genCards(unicorn.basic, BasicUnicorn, true),
            magical: genCards(unicorn.magical, MagicalUnicorn, true),
        },
        upgrade: genCards(upgrade, Upgrade, true),
    },
};
