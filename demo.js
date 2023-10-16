(() => {
    const demo = require('./src/decks/base/demo');
    const deck = [
        ['#baby-unicorn', demo.unicorn.baby],
        ['#basic-unicorn', demo.unicorn.basic],
        ['#magical-unicorn', demo.unicorn.magical],
        ['#magic', demo.magic],
        ['#upgrade', demo.upgrade],
        ['#downgrade', demo.downgrade],
        ['#instant', demo.instant],
    ];

    for (let row = 0; row < deck.length; row++) {
        const [selector, arr] = deck[row];
        const list = document.querySelector(selector);
        for (let col = 0; col < arr.length; col++) {
            const el = arr[col];
            const card = document.createElement('li');
            const img = document.createElement('img');
            img.alt = el.name;
            img.width = 200;
            // below the fold or not visible from carousel
            if (row > 1 || col > 4) {
                img.loading = 'lazy';
            }
            const url =
                'wsrv.nl/?url=http://unstablegameswiki.com' + el.img + '&w=400';
            img.src =
                'https://' +
                url +
                '&output=webp&default=ssl:' +
                encodeURIComponent(url);
            const name = document.createElement('b');
            name.innerText = el.name;
            const desc = document.createElement('p');
            desc.innerText = el.desc;
            card.append(img, name, desc);
            list.appendChild(card);
        }
    }
})();
