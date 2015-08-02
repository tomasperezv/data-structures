var Algorithm = require('../algorithm');

/**
 * @constructor
 */
var Prim = function() {
  Algorithm.call(this);
};

Prim.prototype = new Algorithm();

/**
 * @method _initializeDistances
 * @param {Array} A Adjacency matrix
 * @return {Array}
 * @private
 */
Prim.prototype._initializeDistances = function(A) {
  var distances = [];

  for (var i = 0; i < A.length; i++) {
    distances.push(Number.MAX_VALUE);
  }

  for (i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      if (A[i][j] === 0) {
        A[i][j] = Number.MAX_VALUE;
      }
    }
  }

  return distances;
};

/**
 * @method solve
 * @param {A} A Adjacency matrix
 * @return {Array} Minimum spanning tree.
 * @public
 */
Prim.prototype.solve = function(A) {

  var visited = {};

  var distances = this._initializeDistances(A);

  // Start with the first node
  var node = 0;
  distances[node] = 0;

  while (Object.keys(visited).length < distances.length) {
    visited[node] = true;

    for (var i = 0; i < distances.length; i++) {
      if (!(i in visited) && A[node][i] < distances[i]) {
        distances[i] = A[node][i];
      }
    }

    var min = Number.MAX_VALUE;
    for (i = 0; i < distances.length; i++) {
      if (!(i in visited) && distances[i] < min) {
        min = distances[i];
        node = i;
      }
    }

  }

  return distances;

};

module.exports = Prim;
