class Stack {
    #cards;

    constructor(cards = []) {
        this.#cards = cards;
    }

    get cards() {
        return this.#cards.slice();
    }

    get count() {
        return this.cards.length;
    }

    #add(card) {
        this.#cards.push(card);
    }

    #draw() {
        return this.#cards.pop();
    }

    #has(card) {
        return this.cards.includes(card);
    }

    #remove(card) {
        const idx = this.cards.findIndex((el) => el === card);
        if (idx > -1) {
            this.#cards.splice(idx, 1);
        }
    }

    find(type) {
        return this.cards.find((card) => card instanceof type);
    }

    shuffle() {
        for (let i = this.count - 1; i > 0; i--) {
            const j = (Math.random() * (i + 1)) | 0;
            [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]];
        }
    }

    draw(from) {
        const card = from.#draw();
        if (card) {
            this.#add(card);
            return card;
        }
    }

    move(card, to) {
        if (this.#has(card)) {
            this.#remove(card);
            to.#add(card);
        }
    }
}

module.exports = Stack;
