const Downgrade = require('./types');

const baseDeckDowngrades = require('./base-deck').map(
    ([name, desc, img]) => new Downgrade(name, desc, img)
);

module.exports = {
    baseDeckDowngrades,
};
