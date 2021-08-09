const BasicUnicorn = require('../../../types/basic_unicorn');

class Blue extends BasicUnicorn {
  constructor() {
    super(
      'Popped collars are for date nights only.',
      'http://unstablegameswiki.com/images/0/06/UU-Base-018-SE.png'
    );
  }
}

module.exports = Blue;
