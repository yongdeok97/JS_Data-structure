import LinkedList from "../LinkedList/LinkedList";

export default class Stack {
  constructor() {
    this.LinkedList = new LinkedList();
  }
  isEmpty() {
    if (this.LinkedList.head === null) return true;
    return false;
  }
  peek() {
    if (isEmpty() === true) {
      return false;
    }
    return this.LinkedList.head.value;
  }
  push(value) {
    this.LinkedList.append(value);
  }
  pop() {
    this.LinkedList.deleteHead();
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
