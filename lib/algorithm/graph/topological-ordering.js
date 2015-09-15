/**
 * @author Tomas Perez <tom@0x101.com>
 */

var Algorithm = require('../algorithm');

var TopologicalOrdering = function() {
  this._originQueue = [];
  this._inDegree = {};
  Algorithm.call(this);
};

/**
* @method _getOrigin
* @param {Array} A
* @return {Number|null}
* @private
*/
TopologicalOrdering.prototype._getOrigin = function(A) {

  var origin = null;
  var i, j;

  if (this._originQueue.length === 0) {

    for (i = 0; i < A.length; i++) {

      for (j = 0; j < A.length; j++) {
        if (i !== j && A[i][j] === 1) {
          if (typeof this._inDegree[j] === 'undefined') {
            this._inDegree[j] = 1;
          } else {
            this._inDegree[j]++;
          }
        }
      }

    }

    for (i = 0; i < A.length; i++) {
      if (typeof this._inDegree[i] === 'undefined') {
        this._originQueue.push(i);
      }
    }

  }

  return this._originQueue.shift();
};

/**
 * @method _updateIndegree
 * @param {Number} vertice
 * @public
 */
TopologicalOrdering.prototype._updateIndegree = function(A, vertice) {
  // Find the list of nodes to update
  for (var i = 0; i < A.length; i++) {
    if (i === vertice) {
      continue;
    }
    if (A[vertice][i] === 1 && typeof this._inDegree[i] !== 'undefined') {
      this._inDegree[i]--;
      if (this._inDegree[i] === 0) {
        this._originQueue.push(i);
      }
    }
  }
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
  while (topologicalSort.length < A.length) {
    var origin = this._getOrigin(A);
    this._updateIndegree(A, origin);
    topologicalSort.push(origin);
  }

  return topologicalSort;

};

module.exports = TopologicalOrdering;
