const { BabyUnicorn, BasicUnicorn, MagicalUnicorn } = require('./types');

const babyUnicorns = require('./baby').map(
    ([name, img]) => new BabyUnicorn(name, img)
);

const basicUnicorns = require('./basic').map(
    ([name, desc, img]) => new BasicUnicorn(name, desc, img)
);

const magicalUnicorns = require('./magical').map(
    ([name, desc, img]) => new MagicalUnicorn(name, desc, img)
);

module.exports = {
    babyUnicorns,
    basicUnicorns,
    magicalUnicorns,
};
