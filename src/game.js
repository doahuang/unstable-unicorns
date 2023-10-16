const { genPlayers } = require('./utils');
const { Deck, DiscardPile, Nursery, Round } = require('./types');

class Game {
    constructor(data = require('./setting')) {
        this.deck = new Deck(data.edition.deck).shuffle();
        this.discardPile = new DiscardPile();
        this.nursery = new Nursery(data.edition.nursery).shuffle();
        this.players = genPlayers(data.players, this.discardPile);
        this.round = new Round(this.players);
    }

    get winner() {
        return this.players.find((player) => player.isWinner);
    }

    init() {
        for (let player of this.players) {
            player.draw(this.deck, 5);
            const card = player.draw(this.nursery);
            player.play(card);
        }
    }
}

module.exports = Game;
