const Downgrade = require('../../types/downgrade');

class BarbedWire extends Downgrade {
  constructor() {
    super(
      'Barbed Wire',
      'Each time a Unicorn card enters or leaves your Stable, DISCARD a card.',
      'http://unstablegameswiki.com/images/6/67/UU-Base-074-SE.png'
    );
  }
}

module.exports = BarbedWire;
