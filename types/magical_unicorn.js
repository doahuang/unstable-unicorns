const Unicorn = require('./unicorn');

class MagicalUnicorn extends Unicorn {
  constructor(name, desc) {
    super(name, desc, 'Magical');
  }
}

module.exports = MagicalUnicorn;
