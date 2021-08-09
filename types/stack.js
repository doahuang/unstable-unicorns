class Stack {
  #stack = [];

  constructor(stack = []) {
    this.#stack = stack;
  }

  count() {
    return this.#stack.length;
  }

  show() {
    return this.#stack;
  }

  add(element) {
    this.#stack.push(element);
    return element;
  }

  remove(index) {
    const removed = this.#stack[index];
    this.#stack = [
      ...this.#stack.slice(0, index),
      ...this.#stack.slice(index + 1),
    ];
    return removed;
  }

  shuffle() {
    // to do
  }
}

module.exports = Stack;
