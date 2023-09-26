const Upgrade = require('../../types/upgrade');

class Yay extends Upgrade {
  constructor() {
    super(
      'Yay',
      "Cards you play cannot be Neigh'd.",
      'http://unstablegameswiki.com/images/1/1b/UU-Base-069-SE.png'
    );
  }
}

module.exports = Yay;
