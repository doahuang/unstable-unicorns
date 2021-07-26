const Unicorn = require('./unicorn');

class BabyUnicorn extends Unicorn {
  constructor(name = 'Baby Unicorn') {
    super(
      name,
      'If this card would be sacrificed, destroyed, or returned to your hand, return it to the Nursery instead.',
      'Baby'
    );
  }
}

module.exports = BabyUnicorn;
