const BasicUnicorn = require('../../../types/basic_unicorn');

class Orange extends BasicUnicorn {
  constructor() {
    super(
      'Pumpkin spice is the pumpkin spice of life.',
      'http://unstablegameswiki.com/images/6/66/UU-Base-015-SE.png'
    );
  }
}

module.exports = Orange;
