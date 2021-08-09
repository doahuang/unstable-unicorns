const Magic = require('../../types/magic');

class ShakeUp extends Magic {
  constructor() {
    super(
      'Shake Up',
      'Shuffle this card, your hand, and the discard pile into the deck. DRAW 5 cards.',
      'http://unstablegameswiki.com/images/4/4d/UU-Base-063-SE.png'
    );
  }
}

module.exports = ShakeUp;
