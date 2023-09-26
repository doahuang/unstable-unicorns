const Upgrade = require('../../types/upgrade');

class GlitterBomb extends Upgrade {
  constructor() {
    super(
      'Glitter Bomb',
      'If this card is in your Stable at the beginning of your turn, you may SACRIFICE a card, then DESTROY a card.',
      'http://unstablegameswiki.com/images/e/e1/UU-Base-068-SE.png'
    );
  }
}

module.exports = GlitterBomb;
