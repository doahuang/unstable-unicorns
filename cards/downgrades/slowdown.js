const Downgrade = require('../../types/downgrade');

class Slowdown extends Downgrade {
  constructor() {
    super(
      'Slowdown',
      'You cannot play Neigh cards.',
      'http://unstablegameswiki.com/images/d/da/UU-Base-077-SE.png'
    );
  }
}

module.exports = Slowdown;
