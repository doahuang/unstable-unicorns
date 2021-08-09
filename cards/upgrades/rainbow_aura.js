const Upgrade = require('../../types/upgrade');

class RainbowAura extends Upgrade {
  constructor() {
    super(
      'Rainbow Aura',
      'Your Unicorn cards cannot be destroyed.',
      'http://unstablegameswiki.com/images/d/d9/UU-Base-071-SE.png'
    );
  }
}

module.exports = RainbowAura;
