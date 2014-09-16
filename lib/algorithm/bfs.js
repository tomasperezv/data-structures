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
    var children = currentNode.children();
    result.push(currentNode.value());
    if (children !== null) {
      children.map(function(current) {
        queue.push(current);
      });
    }
  }

  return result;

};

module.exports = BFS;
