const Card = require('../types');

class Unicorn extends Card {
    constructor(name, desc, img) {
        super(name, desc, img);
    }
}

class BabyUnicorn extends Unicorn {
    constructor(name = 'Baby Unicorn', img) {
        super(
            name,
            'If this card would be sacrificed, destroyed, or returned to your hand, return it to the Nursery instead.',
            img
        );
    }
}

class BasicUnicorn extends Unicorn {
    constructor(name = 'Basic Unicorn', desc, img) {
        super(name, desc, img);
    }
}

class MagicalUnicorn extends Unicorn {
    constructor(name, desc, img) {
        super(name, desc, img);
    }
}

module.exports = {
    BabyUnicorn,
    BasicUnicorn,
    MagicalUnicorn,
};
