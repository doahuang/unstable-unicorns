const Instant = require('../../types/instant');

class Neigh extends Instant {
  constructor() {
    super(
      'Neigh',
      'Play this card when another player tries to play a card. Stop their card from being played and send it to the discard pile.',
      'http://unstablegameswiki.com/images/2/25/UU-Base-082-SE.png'
    );
  }
}

module.exports = Neigh;
