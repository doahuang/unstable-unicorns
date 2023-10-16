class Card {
    constructor(data) {
        this.name = data.name;
        this.desc = data.desc;
        this.img = data.img;
    }
}

class Downgrade extends Card {}

class Magic extends Card {}

class Instant extends Card {}

class Unicorn extends Card {}

class Upgrade extends Card {}

module.exports = {
    Card,
    Downgrade,
    Instant,
    Magic,
    Unicorn,
    Upgrade,
};
