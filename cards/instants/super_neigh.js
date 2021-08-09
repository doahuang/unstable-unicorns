const Instant = require('../../types/instant');

class SuperNeigh extends Instant {
  constructor() {
    super(
      'Super Neigh',
      "Play this card when another player tries to play a card. Stop their card from being played and send it to the discard pile. This card cannot be Neigh'd.",
      'http://unstablegameswiki.com/images/3/35/UU-Base-083-SE.png'
    );
  }
}

module.exports = SuperNeigh;
