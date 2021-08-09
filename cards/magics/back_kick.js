const Magic = require('../../types/magic');

class BackKick extends Magic {
  constructor() {
    super(
      'Back Kick',
      "Return a card in another player's Stable to their hand. That player must DISCARD a card.",
      'http://unstablegameswiki.com/images/d/dd/UU-Base-052-SE.png'
    );
  }
}

module.exports = BackKick;
