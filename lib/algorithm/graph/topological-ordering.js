/**
 * @author Tomas Perez <tom@0x101.com>
 */

var Algorithm = require('../algorithm');

var TopologicalOrdering = function() {
  Algorithm.call(this);
};

/**
 * @method _getNodes
 * @param {Array} A Adjacency matrix
 * @return {Array}
 * @private
 */
TopologicalOrdering.prototype._getNodes = function(A) {
  var nodes = [];
  for (var i = 0; i < A.length; i++) {
    nodes.push(i);
  }
  return nodes;
};

/**
* @method _getOrigin
* @param {Array} A
* @param {Object} visited
* @return {Number|null}
* @private
*/
TopologicalOrdering.prototype._getOrigin = function(A, visited) {

  var origin = null;
  for (var i = 0; i < A.length; i++) {

    if (typeof visited[i] !== 'undefined') {
      continue;
    }

    var hasOrigin = false;
    for (var j = 0; j < A.length; j++) {
      if (i !== j && A[j][i] === 1 && typeof visited[j] === 'undefined') {
        hasOrigin = true;
        break;
      }
    }

    if (!hasOrigin) {
      origin = i;
      break;
    }

  }

  return origin;

};

/**
* @method solve
* @param {Array} A Adjacency matrix
* @return return {Array}
* @public
*/
TopologicalOrdering.prototype.solve = function(A) {

  if (A.length === 0) {
    return [];
  }

  var topologicalSort = [];

  var visited = {};
  var processedCount = 0;

  while (processedCount < A.length) {
    var origin = this._getOrigin(A, visited);
    if (origin !== null) {
      topologicalSort.push(origin);
      visited[origin] = true;
    } else {
      break;
    }
  }

  return topologicalSort;

};

module.exports = TopologicalOrdering;
