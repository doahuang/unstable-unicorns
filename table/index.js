const { Deck, DiscardPile, Nursery, Stable } = require('../stacks');

class Table {
    constructor(deck, nursery) {
        this.deck = new Deck(deck);
        this.discardPile = new DiscardPile();
        this.nursery = new Nursery(nursery);
        this.stable = new Stable();
        Object.freeze(this);
    }
}

module.exports = Table;
