var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.initialSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.initialSize] = value;
  this.initialSize++;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.initialSize - 1];
  if (this.initialSize > 0) {
    delete this.storage[this.initialSize - 1];
    this.initialSize--;
  }
  return result;
};

Stack.prototype.size = function() {

  return this.initialSize;
};

