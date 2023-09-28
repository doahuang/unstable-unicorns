const { Downgrade } = require('../../types/cards');

module.exports = require('./downgrade').map((data) => new Downgrade(...data));
