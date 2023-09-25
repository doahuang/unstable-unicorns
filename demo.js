(function () {
    const {
        babyUnicorns,
        basicUnicorns,
        magicalUnicorns,
    } = require('./cards/unicorns');

    for (const [selector, unicorns] of [
        ['#baby', babyUnicorns],
        ['#basic', basicUnicorns],
        ['#magical', magicalUnicorns],
    ]) {
        const list = document.querySelector(selector);
        for (let idx = 0; idx < unicorns.length; idx++) {
            const unicorn = unicorns[idx];
            const card = document.createElement('li');
            const img = document.createElement('img');
            img.alt = unicorn.name;
            img.width = 200;
            if (idx > 4) {
                img.loading = 'lazy';
            }
            const url = 'wsrv.nl/?url=' + unicorn.img + '&w=400';
            img.src =
                'https://' +
                url +
                '&output=webp&default=ssl:' +
                encodeURIComponent(url);
            const name = document.createElement('b');
            name.innerText = unicorn.name;
            const desc = document.createElement('p');
            desc.innerText = unicorn.desc;
            card.append(img, name, desc);
            list.appendChild(card);
        }
    }
})();
