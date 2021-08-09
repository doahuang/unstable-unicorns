const Stack = require('./stack');

class Deck extends Stack {
  constructor(cards) {
    super(cards);
    super.shuffle();
  }

  draw() {
    return this.show().pop();
  }

  peek(number = 1) {
    return this.show().slice(this.count() - number);
  }
}

module.exports = Deck;
