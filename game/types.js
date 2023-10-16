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

// const players = [1, 2, 3, 4];
// const turns = players.map((player) => new Turn(player));
// const round = new Round(turns);
// for (let idx = 0; idx < round.count; idx++) {
//     const turn = round.current;
//     for (let idx = 0; idx < turn.count; idx++) {
//         const next = turn.next;
//         turn.end();
//         !next && round.end();
//     }
// }

module.exports = {
    Deck,
    DiscardPile,
    Hand,
    Nursery,
    Round,
    Stable,
};
