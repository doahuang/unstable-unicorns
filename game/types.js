const Stack = require('./stack');

class Deck extends Stack {}

class DiscardPile extends Stack {}

class Hand extends Stack {}

class Nursery extends Stack {}

class Stable extends Stack {}

module.exports = {
    Deck,
    DiscardPile,
    Hand,
    Nursery,
    Stable,
};
