const Downgrade = require('../../types/downgrade');

class SadisticRitual extends Downgrade {
  constructor() {
    super(
      'Sadistic Ritual',
      'If this card is in your Stable at the beginning of your turn, SACRIFICE a Unicorn card, then DRAW a card.',
      'http://unstablegameswiki.com/images/c/cb/UU-Base-076-SE.png'
    );
  }
}

module.exports = SadisticRitual;
