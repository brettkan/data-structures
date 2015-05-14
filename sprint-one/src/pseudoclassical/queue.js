var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.properties = {};
  this.eCounter = 0;
  this.dCounter = 0;

};

Queue.prototype.size = function (){
  return  this.eCounter - this.dCounter;
};
Queue.prototype.enqueue = function (value){
  this.properties[this.eCounter] = value;
  this.eCounter++;
};
Queue.prototype.dequeue = function (){
  var result = this.properties[this.dCounter];
  if ( (this.eCounter - this.dCounter) >  0 ){
    delete this.properties[this.dCounter];
    this.dCounter++;
  }

  return result;
};

