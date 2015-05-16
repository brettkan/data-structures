var BinarySearchTree = function(value){
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;

  _.extend(obj, binaryMethods);

  return obj
};


var binaryMethods = {};

binaryMethods.insert = function(value) {

  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binaryMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  } else if (target < this.value) {
    return this.left === null ? false : this.left.contains(target);
  } else if (target > this.value) {
    return this.right === null ? false : this.right.contains(target);
  }
};

binaryMethods.depthFirstLog = function(callback) {
  callback(this.value);

  if (this.left !== null) {
    this.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
