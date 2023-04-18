class bTreeNode {
  constructor(vlaue, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
