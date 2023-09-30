const Table = require('../table');

const Edition = {
    base: require('../cards/base-deck').edition,
};

class Game {
    constructor(players, edition = Edition.base) {
        this.players = players;
        this.table = new Table(edition);
        Object.freeze(this);
    }
}

module.exports = Game;
