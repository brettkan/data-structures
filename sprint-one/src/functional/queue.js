var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numberEnqueued = 0;
  var numberDequeued = 0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[numberEnqueued] = value;
    numberEnqueued++;
  };

  someInstance.dequeue = function(){
    if (numberDequeued < numberEnqueued) {
      var result = storage[numberDequeued];
      numberDequeued++;
      return result;

      // var result = storage[numberEnqueued - 2];
      // delete storage[numberEnqueued - 2];
      // numberEnqueued--;
      // return result;
    }
  };

  someInstance.size = function(){
    var size = numberEnqueued - numberDequeued;
    return size;
  };

  return someInstance;
};
