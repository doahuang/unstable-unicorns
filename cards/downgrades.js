const BarbedWire = require('./downgrades/barbed_wire');
const Pandamonium = require('./downgrades/pandamonium');
const SadisticRitual = require('./downgrades/sadistic_ritual');
const Slowdown = require('./downgrades/slowdown');
const NannyCam = require('./downgrades/nanny_cam');
const BrokenStable = require('./downgrades/broken_stable');
const BlindingLight = require('./downgrades/blinding_light');
const TinyStable = require('./downgrades/tiny_stable');

module.exports = [
  new BarbedWire(),
  new Pandamonium(),
  new SadisticRitual(),
  new Slowdown(),
  new NannyCam(),
  new BrokenStable(),
  new BlindingLight(),
  new TinyStable(),
];
