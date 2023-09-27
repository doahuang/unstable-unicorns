(function () {
    const unicorns = require('./cards/unicorn/base-deck');
    const deck = [
        ['#baby-unicorn', unicorns.babyUnicorns],
        ['#basic-unicorn', unicorns.basicUnicorns],
        ['#magical-unicorn', unicorns.magicalUnicorns],
        ['#magic', require('./cards/magic').baseDeckMagics],
        ['#upgrade', require('./cards/upgrade').baseDeckUpgrades],
        ['#downgrade', require('./cards/downgrade').baseDeckDowngrades],
        ['#instant', require('./cards/instant').baseDeckInstants],
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
            const url = 'wsrv.nl/?url=' + el.img + '&w=400';
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
