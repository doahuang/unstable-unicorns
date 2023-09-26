const Upgrade = require('../../types/upgrade');

class CaffeineOverload extends Upgrade {
  constructor() {
    super(
      'Caffeine Overload',
      'If this card is in your Stable at the beginning of your turn, you may SACRIFICE a card, then DRAW 2 cards.',
      'http://unstablegameswiki.com/images/a/a1/UU-Base-093-SE.png'
    );
  }
}

module.exports = CaffeineOverload;
