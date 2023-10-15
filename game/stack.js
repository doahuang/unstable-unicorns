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
