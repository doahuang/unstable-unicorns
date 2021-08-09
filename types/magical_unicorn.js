const Unicorn = require('./unicorn');

class MagicalUnicorn extends Unicorn {
  constructor(name, desc, img) {
    super(name, 'Magical', desc, img);
  }
}

module.exports = MagicalUnicorn;
