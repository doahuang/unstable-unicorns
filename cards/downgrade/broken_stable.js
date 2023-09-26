const Downgrade = require('../../types/downgrade');

class BrokenStable extends Downgrade {
  constructor() {
    super(
      'Broken Stable',
      'You cannot play Upgrade cards.',
      'http://unstablegameswiki.com/images/6/6b/UU-Base-079-SE.png'
    );
  }
}

module.exports = BrokenStable;
