const Magic = require('../../types/magic');

class UnicornSwap extends Magic {
  constructor() {
    super(
      'Unicorn Swap',
      "Move a Unicorn card in your Stable to any other player's Stable, then STEAL a Unicorn card from that player's Stable.",
      'http://unstablegameswiki.com/images/8/8c/UU-Base-055-SE.png'
    );
  }
}

module.exports = UnicornSwap;
