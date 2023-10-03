const { Unicorn } = require('../cards/types');
const Player = require('./player');
const Table = require('./table');
const editions = require('./editions');

class Game {
    constructor(players = [], edition = editions.base) {
        this.table = new Table(edition);
        this.players = players.map((el) => new Player(el));
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
        this.players.find((player) => player.count(Unicorn) > 6);
    }
}

module.exports = Game;
