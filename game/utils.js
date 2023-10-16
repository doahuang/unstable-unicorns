const Bot = require('./bot');
const Human = require('./human');

module.exports = {
    genPlayers: (list, discardPile) => {
        return list.map((data) => {
            data = { ...data, discardPile };
            return data.type === 'bot' ? new Bot(data) : new Human(data);
        });
    },
};
