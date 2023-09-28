const {
    BabyUnicorn,
    BasicUnicorn,
    MagicalUnicorn,
} = require('../../types/unicorns');

module.exports = {
    baby: require('./baby').map((data) => new BabyUnicorn(...data)),
    basic: require('./basic').map((data) => new BasicUnicorn(...data)),
    magical: require('./magical').map((data) => new MagicalUnicorn(...data)),
};
