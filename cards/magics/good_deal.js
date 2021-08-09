const Magic = require('../../types/magic');

class GoodDeal extends Magic {
  constructor() {
    super(
      'Good Deal',
      'DRAW 3 cards and DISCARD a card.',
      'http://unstablegameswiki.com/images/b/b2/UU-Base-062-SE.png'
    );
  }
}

module.exports = GoodDeal;
