class Card {
    constructor(name, desc, img) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        Object.freeze(this);
    }
}

module.exports = Card;
