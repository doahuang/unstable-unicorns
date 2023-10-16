const { genPlayers } = require('./utils');
const Table = require('./table');
const { Turn } = require('./types');

class Game {
    #turn;

    constructor(players = [], edition = require('./editions').base) {
        this.table = new Table(edition);
        this.players = genPlayers(players, this.table.discardPile);
        this.#turn = new Turn(this.players);
        Object.freeze(this);
    }

    get winner() {
        return this.players.find((player) => player.isWinner);
    }

    get currentPlayer() {
        return this.#turn.current;
    }

    endPlayerTurn() {
        this.#turn.end();
    }

    init() {
        this.table.deck.shuffle();
        for (let idx = 0; idx < 5; idx++) {
            for (const player of this.players) {
                player.draw(this.table.deck);
            }
        }
        for (const player of this.players) {
            const card = player.draw(this.table.nursery);
            player.play(card);
        }
    }
}

module.exports = Game;
