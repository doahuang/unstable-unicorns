const { Bot, Human } = require('./player');

module.exports = {
    players: [
        { name: 'Human 1', type: Human },
        { name: 'Bot 1', type: Bot },
        { name: 'Bot 2', type: Bot },
        { name: 'Bot 3', type: Bot },
    ],
    edition: require('./editions').Base,
    phases: ['BEGINNING_OF_TURN', 'DRAW', 'ACTION', 'END_OF_TURN'],
};
