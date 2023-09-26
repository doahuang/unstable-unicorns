const Downgrade = require('../../types/downgrade');

class Pandamonium extends Downgrade {
  constructor() {
    super(
      'Pandamonium',
      'All of your Unicorns are considered Pandas. Cards that affect Unicorn cards do not affect your Pandas.',
      'http://unstablegameswiki.com/images/1/1b/UU-Base-075-SE.png'
    );
  }
}

module.exports = Pandamonium;
