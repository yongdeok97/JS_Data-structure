import * as LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  append(value) {
    const newNode = new LinkedListNode(value, this.head);

    if (!this.head)
    {
        this.head = newNode;
        this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
}
  delete(value) {

    let deletenode = this.head;
    let curNode;

    if (value == deletenode.value)
    {
      this.head == this.head.next;
      return deletenode;
    }
    while (value != deletenode.value)
    {
      curNode = deletenode;
      deletenode = deletenode.next;
    }
    if (deletenode == null)
      return null;
    curNode.next = deletenode.next;

    return deletenode.value;
  }
}
