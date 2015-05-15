

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = GraphNode(node);
};

Graph.prototype.contains = function(node){
  for (var key in this.nodes) {
    if (this.nodes[key].value = node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.nodes[fromNode].connections.length; i++) {
    if (this.nodes[fromNode].connections[i].value === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].connections.push(this.nodes[toNode]);
  this.nodes[toNode].connections.push(this.nodes[fromNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i = 0; i < this.nodes[fromNode].connections.length; i++) {
    if (this.nodes[fromNode].connections[i].value === toNode) {
      this.nodes[fromNode].connections.splice(i, 1);
    }
  }

  for (var i = 0; i < this.nodes[toNode].connections.length; i++) {
    if (this.nodes[toNode].connections[i].value === fromNode) {
      this.nodes[toNode].connections.splice(i, 1);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes){
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var GraphNode = function(value) {
  var newNode = {};
  newNode.value = value;
  newNode.connections = [];
  return newNode;
};


