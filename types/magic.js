const Card = require('./card');

class Magic extends Card {
  constructor(name, desc) {
    super({
      name,
      type: 'Magic',
      desc,
    });
  }
}

module.exports = Magic;
