/**
 * @author Tomas Perez <tom@0x101.com>
 */

var Algorithm = require('../algorithm');

/**
* @method ConnectedComponents
* @return {Array}
* @public
*/
var ConnectedComponents = function() {
  Algorithm.call(this);
};

ConnectedComponents.prototype = new Algorithm();

/**
* @method getNeighbors
* @param {Array} A
* @return {Array}
* @private
*/
ConnectedComponents.prototype.getNeighbors = function(A, source) {
  var neighbors = [];

  for (var i = 0; i < A.length; i++) {
    if (A[source][i] === 1) {
      neighbors.push(i);
    }
  }

  return neighbors;

};

/**
* @method breadthFirstSearch
* @param {Array} A
* @param {Number} source
* @param {Object} visited
* @return {Array}
* @public
*/
ConnectedComponents.prototype.breadthFirstSearch = function(A, source, visited) {
  var queue = [];
  var connected = [];

  queue.push(source);
  connected.push(source);
  visited[source] = true;

  while (queue.length > 0) {

    var node = queue.shift();
    var neighbors = this.getNeighbors(A, node);

    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      if (!(neighbor in visited)) {
        queue.push(neighbor);
        visited[neighbor] = true;
        connected.push(neighbor);
      }
    }

  }

  return connected;

};

/**
* @method solve
* @param {Array} A
* @return {Array}
* @public
*/
ConnectedComponents.prototype.solve = function(A) {

  var visited = {};
  var connectedComponents = [];
  for (var i = 0; i < A.length; i++) {
    if (!(i in visited)) {
      var c = this.breadthFirstSearch(A, i, visited);
      connectedComponents.push(c);
    }
  }

  return connectedComponents;

};

module.exports = ConnectedComponents;
