const Magic = require('../../types/magic');

class MysticalVortex extends Magic {
  constructor() {
    super(
      'Mystical Vortex',
      'Each player (including you) must DISCARD a card. Shuffle the discard pile into the deck.',
      'http://unstablegameswiki.com/images/5/54/UU-Base-061-SE.png'
    );
  }
}

module.exports = MysticalVortex;
