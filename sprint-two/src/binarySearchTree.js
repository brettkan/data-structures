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
  // if (this.left === undefined && this.right === undefined) {
  //   var node = BinarySearchTree(value);
  //   node.first = true;
  // }

  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }

  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binaryMethods.contains = function() {

};

binaryMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
