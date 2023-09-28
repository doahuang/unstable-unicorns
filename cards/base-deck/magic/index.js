const { Magic } = require('../../types/cards');

module.exports = require('./magic').map((data) => new Magic(...data));
