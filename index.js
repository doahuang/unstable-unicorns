const Game = require('./game');

const game = new Game([{ name: 'p1' }, { name: 'p2' }]);
const deck = game.table.deck;
const nursery = game.table.nursery;
const discardPile = game.table.discardPile;
const [p1, p2] = game.players;

console.log('new game');
console.log('deck count:', deck.count);
console.log('nursery count:', nursery.count);
console.log('disacrd pile count:', discardPile.count);

game.init();

console.log('deck count:', deck.count);
console.log('nursery count:', nursery.count);
console.log('p1:', p1.hand.count, p1.stable.count);
console.log('p2:', p2.hand.count, p2.stable.count);

while (!game.isOver) {
    // player takes turn clockwise
    // each turn has 4 phases
    // bot/beginning of turn
    // draw
    // action
    // eot/end of turn
}
