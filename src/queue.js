class Queue {
    #idx = 0;

    constructor(arr = []) {
        this.arr = arr;
    }

    get count() {
        return this.arr.length;
    }

    get current() {
        return this.arr[this.#idx];
    }

    get next() {
        return this.arr[this.#idx + 1];
    }

    end() {
        this.#idx = (this.#idx + 1) % this.count;
    }
}

module.exports = Queue;
