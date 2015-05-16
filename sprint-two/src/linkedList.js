var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next =  Node(value);
      list.tail = list.tail.next;
    }

  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){
    for (var node = list.head; node !== null; node=node.next){
      if (node.value === target){
        return true;
      }
    }
    return false;

  };

  // Used for hashTable function
  // Looks through linked list for key, returns tuple [key, value] if found
  list.find = function(target){
    for (var node = list.head; node !== null; node=node.next){
      if (node.value[0] === target){
        return node.value;
      }
    }

    return null;
  };

  // Used for hashTable function
  list.linkedRemove = function(key) {
    for (var node = list.head; node !== null; node=node.next){
      if (node.next === null) {
        list.removeHead();
      } else {
        if (node.next.value[0] === key) {
          node.next === node.next.next;
          break;
        }
      }
    }

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
