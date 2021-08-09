const BasicUnicorn = require('../../../types/basic_unicorn');

class Green extends BasicUnicorn {
  constructor() {
    super(
      'Vinyl records and mixtapes only.',
      'http://unstablegameswiki.com/images/0/06/UU-Base-017-SE.png'
    );
  }
}

module.exports = Green;
