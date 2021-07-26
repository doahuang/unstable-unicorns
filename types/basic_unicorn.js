const Unicorn = require('./unicorn');

class BasicUnicorn extends Unicorn {
  constructor(desc, name = 'Basic Unicorn') {
    super(name, desc, 'Basic');
  }
}

module.exports = BasicUnicorn;
