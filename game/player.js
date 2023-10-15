const { Downgrade, Unicorn, Upgrade } = require('../cards/types');
const { Hand, Stable } = require('./types');

class Player {
    #discardPile;

    constructor(data) {
        this.#discardPile = data.discardPile;
        this.name = data.name;
        this.hand = new Hand();
        this.stable = new Stable();
        Object.freeze(this);
    }

    get isWinner() {
        let count = 0;
        for (const card of this.hand.cards) {
            count += +(card instanceof Unicorn);
        }
        return count > 6;
    }

    play(card) {
        if ([Downgrade, Unicorn, Upgrade].some((el) => card instanceof el)) {
            this.hand.move(card, this.stable);
        } else {
            this.hand.move(card, this.#discardPile);
        }
    }

    draw(from) {
        return this.hand.draw(from);
    }

    discard(card) {
        this.hand.move(card, this.#discardPile);
    }

    sacrifice(card, stack = this.#discardPile) {
        this.stable.move(card, stack);
    }

    destroy(player, card) {
        player.sacrifice(card);
    }

    steal(player, card) {
        player.sacrifice(card, this.stable);
    }
}

module.exports = Player;
