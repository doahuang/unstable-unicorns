const Card = require('./card');

class Instant extends Card {
  constructor(name, desc, img) {
    super({
      name,
      type: 'Instant',
      desc,
      img,
    });
  }
}

module.exports = Instant;
