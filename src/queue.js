class Queue {
    #idx = 0;

    constructor(queue = []) {
        this.queue = queue;
    }

    get count() {
        return this.queue.length;
    }

    get current() {
        return this.queue[this.#idx];
    }

    get next() {
        return this.queue[this.#idx + 1];
    }

    end() {
        this.#idx = (this.#idx + 1) % this.count;
    }
}

module.exports = Queue;
