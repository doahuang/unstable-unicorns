const Player = require('./player');
const Table = require('./table');

class Game {
    constructor(players = [], edition = require('./editions').base) {
        this.table = new Table(edition);
        this.players = players.map((data) => {
            return new Player({ ...data, discardPile: this.table.discardPile });
        });
        Object.freeze(this);
    }

    init() {
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

    get isOver() {
        return this.players.find((player) => player.isWinner);
    }
}

module.exports = Game;
