const { genPlayers } = require('./utils');
const Table = require('./table');
const { Round } = require('./types');

class Game {
    constructor(data = require('./setting')) {
        const { deck, discardPile, nursery } = new Table(data.edition);
        this.deck = deck;
        this.discardPile = discardPile;
        this.nursery = nursery;
        this.players = genPlayers(data.players, discardPile);
        this.round = new Round(this.players);
    }

    get winner() {
        return this.players.find((player) => player.isWinner);
    }

    init() {
        this.deck.shuffle();

        for (const player of this.players) {
            player.draw(this.deck, 5);
            const card = player.draw(this.nursery);
            player.play(card);
        }
    }
}

module.exports = Game;
