const Magic = require('../../types/magic');

class TargetedDestruction extends Magic {
  constructor() {
    super(
      'Targeted Destruction',
      'DESTROY an Upgrade card or SACRIFICE a Downgrade card.',
      'http://unstablegameswiki.com/images/0/0e/UU-Base-060-SE.png'
    );
  }
}

module.exports = TargetedDestruction;
