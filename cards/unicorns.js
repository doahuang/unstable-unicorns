const { Unicorn } = require('./types');

class BabyUnicorn extends Unicorn {
    constructor(data) {
        super({
            name: 'Baby Unicorn',
            desc: 'If this card would be sacrificed, destroyed, or returned to your hand, return it to the Nursery instead.',
            ...data,
        });
    }
}

class BasicUnicorn extends Unicorn {
    constructor(data) {
        super({ name: 'Basic Unicorn', ...data });
    }
}

class MagicalUnicorn extends Unicorn {}

module.exports = {
    BabyUnicorn,
    BasicUnicorn,
    MagicalUnicorn,
};
