const { Deck, DiscardPile, Nursery, Stable } = require('../stacks');

class Table {
    constructor(data) {
        this.deck = new Deck(data.deck);
        this.discardPile = new DiscardPile();
        this.nursery = new Nursery(data.nursery);
        this.stable = new Stable();
        Object.freeze(this);
    }
}

module.exports = Table;
