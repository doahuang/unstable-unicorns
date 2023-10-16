const Game = require('./src/game');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const game = new Game();
const { deck, discardPile, nursery } = game;

let inited = false;

console.clear();
console.log('Welcome to Unstable Unicorns');
rl.prompt();

const info = () => {
    console.clear();
    console.log('Deck:', deck.count);
    console.log('Nursery:', nursery.count);
    console.log('Disacrd pile:', discardPile.count);
    for (let { name, hand, stable } of game.players) {
        console.log(name + ': hand', hand.count, 'stable', stable.count);
    }
};

rl.on('line', (input) => {
    if (!inited) {
        game.init();
        inited = true;
    } else {
        const { player } = game.round.current;
        player.draw(deck);
        player.action(deck);
        player.eot();
        game.round.end();
    }
    info();
    if (!deck.count || game.winner) {
        rl.close();
    }
    console.log('\r');
    console.log(game.round.current.player.name + "'s turn");
    rl.prompt();
}).on('close', () => {
    console.log('\nGame over!', game.winner ? game.winner.name + ' won.' : '');
    process.exit(0);
});
