class Card {
  constructor({ type, ...props }) {
    for (const prop in props) {
      this[prop] = props[prop];
    }
    this.type = `${type} card`;
    Object.freeze(this);
  }
}

module.exports = Card;
