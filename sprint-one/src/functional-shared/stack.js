var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {stackSize: 0,
                 properties: {}};
  _.extend(storage,stackMethods);
  return storage;
};

var stackMethods= {};
stackMethods.size = function (){
  return this.stackSize;
};
stackMethods.push = function (value){
  this.properties[this.stackSize] = value;
  this.stackSize++;
};
stackMethods.pop  = function (){
  var result = this.properties[this.stackSize - 1];
  if (this.stackSize > 0){
    delete this.properties[this.stackSize - 1];
    this.stackSize--;
  }
  return result;

};

