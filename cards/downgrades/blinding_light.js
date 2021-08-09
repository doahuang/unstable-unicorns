const Downgrade = require('../../types/downgrade');

class BlindingLight extends Downgrade {
  constructor() {
    super(
      'Blinding Light',
      'All of your Unicorn cards are considered Basic Unicorns with no effects.',
      'http://unstablegameswiki.com/index.php?title=File:UU-Base-080-SE.png'
    );
  }
}

module.exports = BlindingLight;
