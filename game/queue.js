class Queue {
    #idx;
    #queue;

    constructor(queue = []) {
        this.#idx = 0;
        this.#queue = queue;
        Object.freeze(this);
    }

    get queue() {
        return this.#queue.slice();
    }

    get count() {
        return this.queue.length;
    }

    get current() {
        return this.queue[this.#idx];
    }

    get #next() {
        return (this.#idx + 1) % this.count;
    }

    end() {
        this.#idx = this.#next;
    }
}

module.exports = Queue;
