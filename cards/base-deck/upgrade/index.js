const { Upgrade } = require('../../types/cards');

module.exports = require('./upgrade').map((data) => new Upgrade(...data));
