const Magic = require('../../types/magic');

class BlatantThievery extends Magic {
  constructor() {
    super(
      'Blatant Thievery',
      "Look at another player's hand. Choose a card and add it to your hand.",
      'http://unstablegameswiki.com/images/8/8a/UU-Base-064-SE.png'
    );
  }
}

module.exports = BlatantThievery;
