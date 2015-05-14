var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.enqueueCounter = 0;
  newQueue.dequeueCounter = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.enqueueCounter] = value;
  this.enqueueCounter++;
};

queueMethods.dequeue = function() {
  var result = this[this.dequeueCounter];
  if (this.dequeueCounter < this.enqueueCounter) {
    delete this[this.dequeueCounter];
    this.dequeueCounter++;
  }
  return result;
};

queueMethods.size = function() {
  return this.enqueueCounter - this.dequeueCounter;
};
