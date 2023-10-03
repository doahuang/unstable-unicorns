const { Unicorn } = require('../cards/types');
const { Hand, Stable } = require('./types');

class Player {
    constructor(data) {
        this.name = data.name;
        this.discardPile = data.discardPile;
        this.hand = new Hand();
        this.stable = new Stable();
        Object.freeze(this);
    }

    count(Card) {
        let count = 0;
        for (const card of this.hand.cards) {
            if (card instanceof Card) {
                count++;
            }
        }
        return count;
    }

    draw(stack) {
        const card = stack.draw();
        this.hand.add(card);
        return card;
    }

    play(card) {
        if (card instanceof Unicorn) {
            this.hand.remove(card);
            this.stable.add(card);
        }
    }
}

module.exports = Player;
