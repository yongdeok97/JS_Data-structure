import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    if (!this.head)
      return null;
    let deleteNode = this.head
    let beforeNode = null;

    while (deleteNode.value !== value)
    {
      if (deleteNode === null)
        return null;
      beforeNode = deleteNode;
      deleteNode = deleteNode.next;
    }
    if (deleteNode === this.head)
    {
      this.head = this.head.next;
      return deleteNode;
    }

    else if (deleteNode === this.tail)
    {
      this.tail = beforeNode;
      return deleteNode;
    }
    beforeNode.next = deleteNode.next;

    return deleteNode;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }

  deleteHead() {
    let deleteNode = this.head;

    if (deleteNode === null)
      return null
    this.head = this.head.next;

    return deleteNode;
  }

  deleteTail() {
    let currentNode = this.head
    let deleteNode = null;

    if (currentNode === null)
      return null
    while (currentNode !== this.tail)
    {
      deleteNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = deleteNode;
    return currentNode;
  }
}
