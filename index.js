const Game = require('./game');

const game = new Game();

console.log('new game');
console.log('deck count:', game.table.deck.count);
console.log('nursery count:', game.table.nursery.count);
console.log('stable:', game.table.stable.cards);
console.log('disacrd pile count:', game.table.discardPile.count);
