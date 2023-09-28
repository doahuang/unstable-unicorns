const Stack = require('./types');

class Deck extends Stack {
    constructor(cards) {
        super(cards);
    }
}

class DiscardPile extends Stack {
    constructor() {
        super();
    }
}

class Nursery extends Stack {
    constructor(cards) {
        super(cards);
    }
}

class Stable extends Stack {
    constructor() {
        super();
    }
}

module.exports = {
    Deck,
    DiscardPile,
    Nursery,
    Stable,
};
