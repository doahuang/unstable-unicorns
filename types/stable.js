const Downgrade = require('./downgrade');
const Stack = require('./stack');
const Unicorn = require('./unicorn');
const Upgrade = require('./upgrade');

class Stable extends Stack {
  constructor() {
    super();
  }

  get(cardType) {
    return this.show().filter((card) => card instanceof cardType);
  }

  unicorns() {
    return this.get(Unicorn);
  }

  upgrades() {
    return this.get(Upgrade);
  }

  downgrades() {
    return this.get(Downgrade);
  }
}

module.exports = Stable;
