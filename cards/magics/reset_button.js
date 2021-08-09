const Magic = require('../../types/magic');

class ResetButton extends Magic {
  constructor() {
    super(
      'Reset Button',
      'Each player (including you) must SACRIFICE all Upgrade and Downgrade cards in their Stable. Shuffle the discard pile into the deck.',
      'http://unstablegameswiki.com/images/d/dc/UU-Base-065-SE.png'
    );
  }
}

module.exports = ResetButton;
