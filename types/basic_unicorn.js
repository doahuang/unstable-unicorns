const Unicorn = require('./unicorn');

class BasicUnicorn extends Unicorn {
  constructor(desc, name = 'Basic Unicorn') {
    super({
      name,
      type: 'Basic Unicorn card',
      desc,
    });
  }
}

module.exports = BasicUnicorn;
