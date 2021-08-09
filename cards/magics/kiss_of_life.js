const Magic = require('../../types/magic');

class KissOfLife extends Magic {
  constructor() {
    super(
      'Kiss of Life',
      'Bring a Unicorn card from the discard pile into your Stable.',
      'http://unstablegameswiki.com/images/8/8b/UU-Base-089-SE.png'
    );
  }
}

module.exports = KissOfLife;
