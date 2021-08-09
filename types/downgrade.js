const Card = require('./card');

class Downgrade extends Card {
  constructor(name, desc, img) {
    super({
      name,
      type: 'Downgrade',
      desc,
      img,
    });
  }
}

module.exports = Downgrade;
