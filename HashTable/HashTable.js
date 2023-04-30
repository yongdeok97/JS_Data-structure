import LinkedList from "../LinkedList/LinkedList";

const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    // Just to keep track of all actual keys in a fast way.
    this.keys = {};
  }

  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAcculator, keysymbol) => hashAcculator + keysymbol.charAt(0),
      0
  );

    return hash % this.buckets.length;
  }
}
