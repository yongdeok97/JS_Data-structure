import LinkedList from "../LinkedList/LinkedList";
export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    return this.isEmpty() ? null : this.linkedList.head.value;
  }

  enqueue(value) {
    this.linkedList.prepend(value);
  }

  dequeue() {
    return this.linkedList.deleteTail().value;
  }

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback) {
    // Return string representation of the queue's linked list.
    return this.linkedList.toString(callback);
  }
}
