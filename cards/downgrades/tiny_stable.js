const Downgrade = require('../../types/downgrade');

class TinyStable extends Downgrade {
  constructor() {
    super(
      'Tiny Stable',
      'If at any time you have more than 5 Unicorns in your Stable, SACRIFICE a Unicorn card.',
      'http://unstablegameswiki.com/images/1/1f/UU-Base-081-SE.png'
    );
  }
}

module.exports = TinyStable;
