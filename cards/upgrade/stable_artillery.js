const Upgrade = require('../../types/upgrade');

class StableArtillery extends Upgrade {
  constructor() {
    super(
      'Stable Artillery',
      'If this card is in your Stable at the beginning of your turn, you may DISCARD 2 cards, then DESTROY a Unicorn card.',
      'http://unstablegameswiki.com/images/8/8a/UU-Base-091-SE.png'
    );
  }
}

module.exports = StableArtillery;
