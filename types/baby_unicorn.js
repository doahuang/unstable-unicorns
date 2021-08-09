const Unicorn = require('./unicorn');

class BabyUnicorn extends Unicorn {
  constructor(img, name = 'Baby Unicorn') {
    super(
      name,
      'Baby',
      'If this card would be sacrificed, destroyed, or returned to your hand, return it to the Nursery instead.',
      img
    );
  }
}

module.exports = BabyUnicorn;
