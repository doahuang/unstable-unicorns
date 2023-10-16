const Queue = require('./queue');
const Stack = require('./stack');

class Deck extends Stack {}

class DiscardPile extends Stack {}

class Hand extends Stack {}

class Nursery extends Stack {}

class Stable extends Stack {}

class Turn extends Queue {}

class Phase extends Queue {
    constructor() {
        super(['BEGINNING_OF_TURN', 'DRAW', 'ACTION', 'END_OF_TURN']);
    }
}

module.exports = {
    Deck,
    DiscardPile,
    Hand,
    Nursery,
    Phase,
    Stable,
    Turn,
};
