/**
 * Implementation of the BFS algorithm
 *
 * @author Tomas Perez <tom@0x101.com>
 */

var Algorithm = require('./algorithm');

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
  var root = tree.root();

  if (root === null) {
    return;
  }

  queue.push(root);

  var pushToQueue = function(current) {
    queue.push(current);
  };

  while (queue.length > 0) {
    var currentNode = queue.shift();
    var children = currentNode.children();
    result.push(currentNode.value());
    if (children !== null) {
      children.map(pushToQueue);
    }
  }

  return result;

};

module.exports = BFS;
