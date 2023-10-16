module.exports = {
    genPlayers: (list = [], discardPile) =>
        list.map(({ type, ...data }) => new type({ ...data, discardPile })),
};
