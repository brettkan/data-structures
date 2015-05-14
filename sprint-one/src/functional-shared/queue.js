var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = {enqueueCounter: 0, dequeueCounter: 0, properties: {}};
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.properties[this.enqueueCounter] = value;
  this.enqueueCounter++;
};

queueMethods.dequeue = function() {
  var result = this.properties[this.dequeueCounter];
  if (this.dequeueCounter < this.enqueueCounter) {
    delete this.properties[this.dequeueCounter];
    this.dequeueCounter++;
  }
  return result;
};

queueMethods.size = function() {
  var queueSize = this.enqueueCounter - this.dequeueCounter;
  return queueSize;
};


