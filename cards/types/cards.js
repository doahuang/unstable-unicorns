class Card {
    constructor(name, desc, img) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        Object.freeze(this);
    }
}

class Downgrade extends Card {
    constructor(name, desc, img) {
        super(name, desc, img);
    }
}

class Magic extends Card {
    constructor(name, desc, img) {
        super(name, desc, img);
    }
}

class Instant extends Card {
    constructor(name, desc, img) {
        super(name, desc, img);
    }
}

class Unicorn extends Card {
    constructor(name, desc, img) {
        super(name, desc, img);
    }
}

class Upgrade extends Card {
    constructor(name, desc, img) {
        super(name, desc, img);
    }
}

module.exports = {
    Card,
    Downgrade,
    Instant,
    Magic,
    Unicorn,
    Upgrade,
};
