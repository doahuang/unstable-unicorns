const Stack = require('./types');

class Deck extends Stack {}

class DiscardPile extends Stack {}

class Nursery extends Stack {}

class Stable extends Stack {}

module.exports = {
    Deck,
    DiscardPile,
    Nursery,
    Stable,
};
