module.exports = {
    genCards: (list, Card, isDemo) => {
        const arr = [];
        for (let [data, count] of list) {
            if (isDemo) {
                arr.push(new Card(data));
            } else {
                for (let idx = 0; idx < count; idx++) {
                    arr.push(new Card(data));
                }
            }
        }
        return arr;
    },
};
