const Upgrade = require('../../types/upgrade');

const ClawMachine = new Upgrade(
  'Claw Machine',
  'If this card is in your Stable at the beginning of your turn, you may DISCARD a card, then DRAW a card.'
);

module.exports = ClawMachine;
