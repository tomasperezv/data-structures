/**
 * @author Tomas Perez <tom@0x101.com>
 */

var Algorithm = require('../algorithm');

/**
 * @constructor
 * @param {String} color1
 * @param {String} color2
 * @public
 */
var TwoColor = function(color1, color2) {
  Algorithm.call(this);

  this.color1 = color1;
  this.color2 = color2;

  // Contain the color bipartition representation for the graph
  // It's represented as a hash map that contains a key per node,
  // and as value one of the set {color1, color2}.
  //  e.g. {0: 'red', 1: 'black', ...}
  this.colors = {};
};

TwoColor.prototype = new Algorithm();

/**
* @method getNeighbors
* @param {Array} A
* @param {Number} node
* @return {Array}
* @private
*/
TwoColor.prototype.getNeighbors = function(A, node) {

  var neighbors = [];
  for (var i = 0; i < A.length; i++) {
    if (A[node][i] === 1) {
      neighbors.push(i);
    }
  }

  return neighbors;

};

/**
* @method _bfs
* @param {Array} A
* @param {Number} origin
* @private
* @throws Error
*/
TwoColor.prototype._bfs = function(A, origin) {
  var queue = [];
  queue.push(origin);
  this.visited[origin] = true;

  while (queue.length > 0) {
    var node = queue.shift();
    var neighbors = this.getNeighbors(A, node);

    for (var i = 0; i < neighbors.length; i++) {

      if (!(neighbors[i] in this.visited)) {
        queue.push(neighbors[i]);
        this.visited[neighbors[i]] = true;
        this.setColor(node, neighbors[i]);

      } else if (this.colors[node] === this.colors[neighbors[i]]) {
        throw new Error('The graph can not be bipartitioned, found 2 connected nodes with same color.');
      }

    }
  }

};

/**
* @method setColor
* @param {Number} parent
* @param {Number} node The node that we want to set the color based on its parent's color.
* @private
*/
TwoColor.prototype.setColor = function(parent, node) {

  if (parent in this.colors) {
    var parentColor = this.colors[parent];
    this.colors[node] = (parentColor === this.color1 ? this.color2 : this.color1);
  } else {
    throw new Error('Trying to set color of a node we found that its parent has no color either.');
  }

};

/**
* @method solve
* @param {Array} A
* @return {Boolean}
* @public
*/
TwoColor.prototype.solve = function(A) {

  var bipartite = true;
  this.visited = {};

  for (var node = 0; node < A.length; node++) {
    if (!(node in this.visited)) {
      try {
        this.colors[node] = this.color1;
        this._bfs(A, node);
      } catch (e) {
        bipartite = false;
        // Must reset the colors map
        this.colors = {};
        break;
      }
    }
  }

  return bipartite;

};

/**
* @method getColors
* @return {Object}
* @public
*/
TwoColor.prototype.getColors = function() {
  return this.colors;
};

module.exports = TwoColor;
