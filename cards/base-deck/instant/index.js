const { Instant } = require('../../types/cards');

module.exports = require('./instant').map((data) => new Instant(...data));
