const Card = require('./card');

class Unicorn extends Card {
  constructor(name, unicornType, desc, img) {
    super({
      name,
      type: `${unicornType} Unicorn`,
      desc,
      img,
    });
  }
}

module.exports = Unicorn;
