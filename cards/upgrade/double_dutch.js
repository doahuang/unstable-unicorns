const Upgrade = require('../../types/upgrade');

class DoubleDutch extends Upgrade {
  constructor() {
    super(
      'Double Dutch',
      'If this card is in your Stable at the beginning of your turn, you may play 2 cards during your Action phase.',
      'http://unstablegameswiki.com/images/b/bf/UU-Base-072-SE.png'
    );
  }
}

module.exports = DoubleDutch;
