const { Deck, DiscardPile, Nursery } = require('./types');

class Table {
    constructor(data) {
        this.deck = new Deck(data.deck);
        this.discardPile = new DiscardPile();
        this.nursery = new Nursery(data.nursery);
        Object.freeze(this);
    }
}

module.exports = Table;
