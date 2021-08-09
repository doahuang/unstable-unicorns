const BasicUnicorn = require('../../../types/basic_unicorn');

class Narwhal extends BasicUnicorn {
  constructor() {
    super(
      'This card has no special powers, but it sure is cute!',
      'http://unstablegameswiki.com/images/8/80/UU-Base-021-SE.png',
      'Basic Narwhal'
    );
  }
}

module.exports = Narwhal;
