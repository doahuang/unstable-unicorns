const Begin = require('./phases/begin');
const Draw = require('./phases/draw');
const Action = require('./phases/action');
const End = require('./phases/end');
const Stack = require('./stack');

class Turn extends Stack {
  constructor() {
    super([
      // game order: begin, draw, action, end
      new End(),
      new Action(),
      new Draw(),
      new Begin(),
    ]);
  }

  currentPhase() {
    return this.show()[this.count() - 1];
  }

  nextPhase() {
    this.show().pop();
  }
}

module.exports = Turn;
