const Magic = require('./types');

const baseDeckMagics = require('./base-deck').map(
    ([name, desc, img]) => new Magic(name, desc, img)
);

module.exports = {
    baseDeckMagics,
};
