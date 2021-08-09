const BasicUnicorn = require('../../../types/basic_unicorn');

class Yellow extends BasicUnicorn {
  constructor() {
    super(
      "Dance like nobody's watching.",
      'http://unstablegameswiki.com/images/3/38/UU-Base-016-SE.png'
    );
  }
}

module.exports = Yellow;
