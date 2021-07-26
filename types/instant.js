const Card = require('./card');

class Instant extends Card {
  constructor(name, desc) {
    super({
      name,
      type: 'Instant',
      desc,
    });
  }
}

module.exports = Instant;
