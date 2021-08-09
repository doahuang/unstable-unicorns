const Unicorn = require('./unicorn');

class BasicUnicorn extends Unicorn {
  constructor(desc, img, name = 'Basic Unicorn') {
    super(name, 'Basic', desc, img);
  }
}

module.exports = BasicUnicorn;
