const Card = require('./card');

class Unicorn extends Card {
  constructor(props) {
    super();
    for (const prop in props) {
      this[prop] = props[prop];
    }
    Object.freeze(this);
  }
}

module.exports = Unicorn;
