const Upgrade = require('../../types/upgrade');

class ClawMachine extends Upgrade {
  constructor() {
    super(
      'Claw Machine',
      'If this card is in your Stable at the beginning of your turn, you may DISCARD a card, then DRAW a card.',
      'http://unstablegameswiki.com/images/2/21/UU-Base-090-SE.png'
    );
  }
}

module.exports = ClawMachine;
