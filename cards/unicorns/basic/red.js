const BasicUnicorn = require('../../../types/basic_unicorn');

class Red extends BasicUnicorn {
  constructor() {
    super(
      'Beards are like, so hot.',
      'http://unstablegameswiki.com/images/9/90/UU-Base-014-SE.png'
    );
  }
}

module.exports = Red;
