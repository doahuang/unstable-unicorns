const {
    Downgrade,
    Instant,
    Magic,
    Unicorn,
    Upgrade,
} = require('../cards/types');
const Player = require('./player');

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

module.exports = Bot;
