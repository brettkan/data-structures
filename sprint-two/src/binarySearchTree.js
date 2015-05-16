var BinarySearchTree = function(value){
  var obj = {};
  obj.value = value;
  obj.left = {};
  obj.right = {};

  _.extend(obj, binaryMethods);

  return obj
};


var binaryMethods = {};

binaryMethods.insert = function(value) {
  if (this.left === undefined && this.right === undefined) {
    var node = BinarySearchTree(value);
  } else {

  }
};

binaryMethods.contains = function() {

};

binaryMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
