const Queue = require('./queue');
const Stack = require('./stack');

class Deck extends Stack {}

class DiscardPile extends Stack {}

class Hand extends Stack {}

class Nursery extends Stack {}

class Stable extends Stack {}

class Turn extends Queue {
    constructor(player) {
        super(require('./setting').phases);
        this.player = player;
    }
}

class Round extends Queue {
    constructor(players) {
        super(players.map((player) => new Turn(player)));
    }
}

module.exports = {
    Deck,
    DiscardPile,
    Hand,
    Nursery,
    Round,
    Stable,
    Turn,
};
