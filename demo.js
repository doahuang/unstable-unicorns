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
        for (const unicorn of unicorns) {
            const card = document.createElement('li');
            const img = document.createElement('img');
            img.width = 200;
            img.loading = 'lazy';
            img.src = unicorn.img;
            const name = document.createElement('b');
            name.innerText = unicorn.name;
            const desc = document.createElement('p');
            desc.innerText = unicorn.desc;
            card.append(img, name, desc);
            list.appendChild(card);
        }
    }
})();
