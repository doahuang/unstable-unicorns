const Upgrade = require('../../types/upgrade');

class RainbowLasso extends Upgrade {
  constructor() {
    super(
      'Rainbow Lasso',
      'If this card is in your Stable at the beginning of your turn, you may DISCARD 3 cards, then STEAL a Unicorn card.',
      'http://unstablegameswiki.com/images/4/4e/UU-Base-092-SE.png'
    );
  }
}

module.exports = RainbowLasso;
