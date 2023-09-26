const Downgrade = require('../../types/downgrade');

class NannyCam extends Downgrade {
  constructor() {
    super(
      'Nanny Cam',
      'Your hand must be visible to all players.',
      'http://unstablegameswiki.com/images/8/8f/UU-Base-078-SE.png'
    );
  }
}

module.exports = NannyCam;
