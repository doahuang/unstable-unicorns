const Magic = require('../../types/magic');

class GlitterTornado extends Magic {
  constructor() {
    super(
      'Glitter Tornado',
      "Return a card in each player's Stable (including yours) to their hand.",
      'http://unstablegameswiki.com/images/6/68/UU-Base-054-SE.png'
    );
  }
}

module.exports = GlitterTornado;
