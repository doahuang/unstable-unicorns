const Card = require('./card');

class Upgrade extends Card {
  constructor(name, desc, img) {
    super({
      name,
      type: 'Upgrade',
      desc,
      img,
    });
  }
}

module.exports = Upgrade;
