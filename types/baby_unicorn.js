const Unicorn = require('./unicorn');

class BabyUnicorn extends Unicorn {
  constructor(name = 'Baby Unicorn') {
    super({
      name,
      type: 'Baby Unicorn card',
      desc: 'If this card would be sacrificed, destroyed, or returned to your hand, return it to the Nursery instead.',
    });
  }
}

module.exports = BabyUnicorn;
