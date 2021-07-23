const Unicorn = require('./unicorn');

class MagicalUnicorn extends Unicorn {
  constructor(name, desc) {
    super({
      name,
      type: 'Magical Unicorn card',
      desc,
    });
  }
}

module.exports = MagicalUnicorn;
