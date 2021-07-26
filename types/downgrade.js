const Card = require('./card');

class Downgrade extends Card {
  constructor(name, desc) {
    super({
      name,
      type: 'Downgrade',
      desc,
    });
  }
}

module.exports = Downgrade;
