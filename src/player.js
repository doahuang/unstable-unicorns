const {
    Downgrade,
    Instant,
    Magic,
    Unicorn,
    Upgrade,
} = require('./decks/types');
const { Hand, Stable } = require('./types');

class Player {
    constructor(data) {
        this.discardPile = data.discardPile;
        this.name = data.name;
        this.hand = new Hand();
        this.stable = new Stable();
    }

    get isWinner() {
        let count = 0;
        for (let card of this.stable.cards) {
            count += +(card instanceof Unicorn);
        }
        return count > 6;
    }

    play(card) {
        if ([Downgrade, Unicorn, Upgrade].some((el) => card instanceof el)) {
            this.hand.move(card, this.stable);
        } else {
            this.hand.move(card, this.discardPile);
        }
    }

    draw(from, num = 1) {
        let card;
        for (let idx = 0; idx < num; idx++) {
            card = this.hand.draw(from);
        }
        return card;
    }

    discard(card) {
        this.hand.move(card, this.discardPile);
    }

    sacrifice(card, stack = this.discardPile) {
        this.stable.move(card, stack);
    }

    destroy(player, card) {
        player.sacrifice(card);
    }

    steal(player, card) {
        player.sacrifice(card, this.stable);
    }
}

class Bot extends Player {
    get random() {
        const idx = (Math.random() * this.hand.count) | 0;
        return this.hand.cards[idx];
    }

    action(deck) {
        const card = this.hand.find(Unicorn);
        if (card) {
            super.play(card);
        } else {
            if (this.hand.count < 7 || (Math.random() * 2) | 0) {
                this.draw(deck);
            } else {
                super.play(this.random);
            }
        }
    }

    eot() {
        while (this.hand.count > 7) {
            let card;
            [Downgrade, Instant, Magic, Upgrade].some((type) => {
                card = this.hand.find(type);
                return card;
            });
            this.discard(card || this.random);
        }
    }
}

class Human extends Bot {}

module.exports = {
    Bot,
    Human,
};
