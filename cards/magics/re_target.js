const Magic = require('../../types/magic');

class ReTarget extends Magic {
  constructor() {
    super(
      'Re-Target',
      "Move an Upgrade or Downgrade card from any player's Stable to any other player's Stable.",
      'http://unstablegameswiki.com/images/1/1a/UU-Base-056-SE.png'
    );
  }
}

module.exports = ReTarget;
