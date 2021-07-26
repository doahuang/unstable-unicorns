const Magic = require('../../types/magic');

const BackKick = new Magic(
  'Back Kick',
  "Return a card in another player's Stable to their hand. That player must DISCARD a card."
);

module.exports = BackKick;
