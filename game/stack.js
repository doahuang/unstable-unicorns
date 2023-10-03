class Stack {
    #cards;

    constructor(cards = []) {
        this.#cards = cards;
        Object.freeze(this);
    }

    get cards() {
        return this.#cards.slice();
    }

    get count() {
        return this.cards.length;
    }

    add(card) {
        this.#cards.push(card);
    }

    remove(card) {
        const idx = this.cards.findIndex((el) => el === card);
        if (idx > -1) {
            this.#cards.splice(idx, 1);
        }
    }

    draw() {
        if (this.count > 0) {
            return this.#cards.pop();
        }
    }
}

module.exports = Stack;
