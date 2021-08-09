const Card = require('./card');

class Magic extends Card {
  constructor(name, desc, img) {
    super({
      name,
      type: 'Magic',
      desc,
      img,
    });
  }
}

module.exports = Magic;
