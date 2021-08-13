const deck = require('./deck');
const nursery = require('./nursery');
const Discard = require('./types/discard');
const Stable = require('./types/stable');
const Hand = require('./types/hand');
const Turn = require('./types/turn');
const Unicorn = require('./types/unicorn');
const Magic = require('./types/magic');
const Upgrade = require('./types/upgrade');
const Downgrade = require('./types/downgrade');
const Instant = require('./types/instant');

const discard = new Discard();
const stable = new Stable();
const hand = new Hand();
const turn = new Turn();

// nursery 13 babies
console.log(nursery.count());
// draw a baby
stable.add(nursery.remove(0));
// nursery 12, stable has 1 baby
console.log(nursery.count(), stable.count());
// deck has 114, hand has 0, draw deck until hand has 5
console.log(deck.count(), hand.count());
while (hand.count() < 5) {
  hand.add(
    deck.remove(
      // random draw for now
      Math.floor(Math.random() * deck.count())
    )
  );
}
// deck has 109, hand has 5
console.log(deck.count(), hand.count());
// begin phase, skip for now
turn.nextPhase();
// draw phase
console.log(turn.currentPhase());
hand.add(
  deck.remove(
    // random draw for now
    Math.floor(Math.random() * deck.count())
  )
);
// hand has 6
console.log(hand.count());
turn.nextPhase();
// action phase
console.log(turn.currentPhase());
// can either play a card from hand, or draw card
// play card, hand has 5
const played = hand.remove(
  // random play for now
  Math.floor(Math.random() * hand.count())
);
console.log(played, hand.count());
if (played instanceof Unicorn) {
  stable.add(played);
  // do unicorn effect if any
} else if (played instanceof Magic) {
  // do magic thing
  discard.add(played);
} else if (played instanceof Upgrade) {
  // do upgrade thing
  stable.add(played);
} else if (played instanceof Downgrade) {
  // do downgrade thing
  stable.add(played);
} else if (played instanceof Instant) {
  // do instant thing
  discard.add(played);
}
turn.nextPhase();
// end phase, discard card until hand has no more than 7
console.log(turn.currentPhase());
while (hand.count() > 7) {
  discard.add(
    hand.remove(
      // random discard
      Math.floor(Math.random() * hand.count())
    )
  );
}
console.log(stable.count(), hand.count(), discard.count());
turn.nextPhase();
if (turn.currentPhase() == null) {
  console.log('a new turn');
}
