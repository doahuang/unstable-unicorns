module.exports = {
    genCards: (list, Card, isDemo) => {
        const arr = [];
        for (let [el, count] of list) {
            if (isDemo) {
                arr.push(new Card(el));
            } else {
                for (let idx = 0; idx < count; idx++) {
                    arr.push(new Card(el));
                }
            }
        }
        return arr;
    },
};
