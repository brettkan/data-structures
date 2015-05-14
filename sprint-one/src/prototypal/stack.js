var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(stackMethods);
  newQueue.queueSize = 0;
  newQueue.properties = {};

  return newQueue;
};

var stackMethods = {};

stackMethods.size = function (){
  return this.queueSize;
};

stackMethods.push = function (value){
  this.properties[this.queueSize] = value;
  this.queueSize++;
};

stackMethods.pop = function (){
  var result = this.properties[this.queueSize -1];
  if (this.queueSize > 0){
    delete this.properties[this.queueSize -1];
    this.queueSize--;
  }
  return result;
};


