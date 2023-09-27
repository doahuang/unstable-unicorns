const Upgrade = require('./types');

const baseDeckUpgrades = require('./base-deck').map(
    ([name, desc, img]) => new Upgrade(name, desc, img)
);

module.exports = {
    baseDeckUpgrades,
};
