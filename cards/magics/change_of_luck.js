const Magic = require('../../types/magic');

class ChangeOfLuck extends Magic {
  constructor() {
    super(
      'Change of Luck',
      'DRAW 2 cards and DISCARD 3 cards, then take another turn.',
      'http://unstablegameswiki.com/images/d/d0/UU-Base-053-SE.png'
    );
  }
}

module.exports = ChangeOfLuck;
