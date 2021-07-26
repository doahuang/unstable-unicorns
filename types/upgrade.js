const Card = require('./card');

class Upgrade extends Card {
  constructor(name, desc) {
    super({
      name,
      type: 'Upgrade',
      desc,
    });
  }
}

module.exports = Upgrade;
