class Card {
  constructor({ name, type, desc, img }) {
    this.name = name;
    this.type = `${type} card`;
    this.desc = desc;
    this.img = img;
    Object.freeze(this);
  }
}

module.exports = Card;
