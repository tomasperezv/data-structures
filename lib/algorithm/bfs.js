/*global Algorithm, InvalidParameter*/

/**
 * Implementation of the BFS algorithm
 *
 * @author Tomas Perez <tom@0x101.com>
 */

require('./algorithm');
require('../error/generic');

var BFS = function() {
  Algorithm.call(this);
};

BFS.prototype = new Algorithm();

/**
 * @param {Tree} tree
 * @return {Array} result List of NodeTrees returned by the BFS search.
 * @method solve
 */
BFS.prototype.solve = function(tree) {

  var queue = [];
  var result= [];
  var root = tree.getRoot();

  if (root === null) {
    return;
  }

  queue.push(root);

  while (queue.length > 0) {

    var currentNode = queue.shift();
    var right = currentNode.right();
    var left = currentNode.left();

    result.push(currentNode.value());
    if (left !== null) {
      queue.push(left);
    }
    if (right !== null) {
      queue.push(right);
    }
  }

  return result;

};

module.exports = BFS;
