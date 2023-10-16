module.exports = {
    genCards: (list, type) => {
        const arr = [];
        for (let [data, count] of list) {
            for (let idx = 0; idx < count; idx++) {
                arr.push(new type(data));
            }
        }
        return arr;
    },
    genDemoCards: (list, type) => list.map(([data]) => new type(data)),
};
