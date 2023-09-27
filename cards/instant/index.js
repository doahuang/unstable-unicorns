const Instant = require('./types');

const baseDeckInstants = require('./base-deck').map(
    ([name, desc, img]) => new Instant(name, desc, img)
);

module.exports = {
    baseDeckInstants,
};
