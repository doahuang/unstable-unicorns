const Magic = require('../../types/magic');

class UnicornPoison extends Magic {
  constructor() {
    super(
      'Unicorn Poison',
      'DESTROY a Unicorn card.',
      'http://unstablegameswiki.com/images/3/30/UU-Base-051-SE.png'
    );
  }
}

module.exports = UnicornPoison;
