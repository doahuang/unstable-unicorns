const Game = require('./game');

const game = new Game();

console.log(
    game,
    game.table.deck.cards,
    game.table.discardPile.cards,
    game.table.nursery.cards,
    game.table.stable.cards
);
