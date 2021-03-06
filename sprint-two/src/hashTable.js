var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i) === undefined) {
    var newLinkedList = LinkedList();
    this._storage.set(i, newLinkedList);
  }

  this._storage.get(i).addToTail([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i).find(k) === null) {
    return null;
  }

  return this._storage.get(i).find(k)[1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i).linkedRemove(k);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
