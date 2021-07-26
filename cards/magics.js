const Magic = require('../types/magic');
const UnicornPoison = require('./magics/unicorn_poison');
const BackKick = require('./magics/back_kick');
const ChangeOfLuck = require('./magics/change_of_luck');
const GlitterTornado = require('./magics/glitter_tornado');
const UnicornSwap = require('./magics/unicorn_swap');
const ReTarget = require('./magics/re_target');
const UnfairBargain = require('./magics/unfair_bargain');
const TwoForOne = require('./magics/two_for_one');

module.exports = [
  UnicornPoison,
  UnicornPoison,
  UnicornPoison,
  BackKick,
  BackKick,
  BackKick,
  ChangeOfLuck,
  ChangeOfLuck,
  GlitterTornado,
  GlitterTornado,
  UnicornSwap,
  UnicornSwap,
  ReTarget,
  ReTarget,
  UnfairBargain,
  UnfairBargain,
  TwoForOne,
  TwoForOne,
  new Magic(
    'Targeted Destruction',
    'DESTROY an Upgrade card or SACRIFICE a Downgrade card.'
  ),
  new Magic(
    'Mystical Vortex',
    'Each player (including you) must DISCARD a card. Shuffle the discard pile into the deck.'
  ),
  new Magic('Good Deal', 'DRAW 3 cards and DISCARD a card.'),
  new Magic(
    'Shake Up',
    'Shuffle this card, your hand, and the discard pile into the deck. DRAW 5 cards.'
  ),
  new Magic(
    'Blatant Thievery',
    "Look at another player's hand. Choose a card and add it to your hand."
  ),
  new Magic(
    'Reset Button',
    'Each player (including you) must SACRIFICE all Upgrade and Downgrade cards in their Stable. Shuffle the discard pile into the deck.'
  ),
  new Magic(
    'Kiss of Life',
    'Bring a Unicorn card from the discard pile into your Stable.'
  ),
];
