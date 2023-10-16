const Game = require('./game');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const game = new Game(
    ['Human 1', 'Bot 1', 'Bot 2', 'Bot 3'].map((name) => ({
        name,
        type: name.startsWith('Bot') ? 'bot' : 'human',
    }))
);
const { deck, discardPile, nursery } = game.table;

let inited = false;

console.clear();
console.log('Welcome to Unstable Unicorns');
rl.prompt();

const info = () => {
    console.clear();
    console.log('Deck:', deck.count);
    console.log('Nursery:', nursery.count);
    console.log('Disacrd pile:', discardPile.count);
    for (const { name, hand, stable } of game.players) {
        console.log(name + ': hand', hand.count, 'stable', stable.count);
    }
};

rl.on('line', (input) => {
    if (!inited) {
        game.init();
        inited = true;
    } else {
        const self = game.players[0];
        if (game.currentPlayer === self) {
            self.draw(deck);
            self.action(deck);
            self.eot();
        } else {
            const bot = game.currentPlayer;
            bot.draw(deck);
            bot.action(deck);
            bot.eot();
        }
        game.endPlayerTurn();
    }
    info();
    if (!deck.count || game.winner) {
        rl.close();
    }
    console.log('\r');
    console.log(game.currentPlayer.name + "'s turn");
    rl.prompt();
}).on('close', () => {
    console.log('\nGame over!', game.winner ? game.winner.name + ' won.' : '');
    process.exit(0);
});
