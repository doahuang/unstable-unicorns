const Card = require('./card');

class Unicorn extends Card {
  constructor(name, desc, unicornType) {
    super({
      name,
      type: `${unicornType} Unicorn`,
      desc,
    });
  }
}

module.exports = Unicorn;
