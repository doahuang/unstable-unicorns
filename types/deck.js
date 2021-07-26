class Deck {
  #cards = [];

  constructor(cards) {
    this.#cards = cards;
  }

  counts() {
    return this.#cards.length;
  }

  draw() {
    return this.#cards.pop();
  }

  peek(number = 1) {
    return this.#cards.slice(this.counts() - number);
  }

  reveal() {
    return this.#cards;
  }
}

module.exports = Deck;
