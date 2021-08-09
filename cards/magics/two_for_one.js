const Magic = require('../../types/magic');

class TwoForOne extends Magic {
  constructor() {
    super(
      'Two-For-One',
      'SACRIFICE a card, then DESTROY 2 cards.',
      'http://unstablegameswiki.com/images/e/ec/UU-Base-058-SE.png'
    );
  }
}

module.exports = TwoForOne;
