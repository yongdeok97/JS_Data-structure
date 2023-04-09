import LinkedList from "../LinkedList/LinkedList";

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }
  isEmpty() {
    if (this.linkedList.head === null) return true;
    return false;
  }
  peek() {
    if (this.isEmpty() === true) {
      return null;
    }
    return this.linkedList.head.value;
  }
  push(value) {
    this.linkedList.prepend(value);
  }
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toArray() {
    return this.linkedList
      .toArray()
      .map((linkedListNode) => linkedListNode.value);
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
