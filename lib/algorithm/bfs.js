/**
 * Implementation of the BFS algorithm
 *
 * @author Tomas Perez <tom@0x101.com>
 */

const Algorithm = require('./algorithm');

/**
 * @constructor
 */
const BFS = function() {
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
  var visited = {};
  var root = tree.root();

  if (root === null) {
    return;
  }

  queue.push(root);

  var pushToQueue = function(current) {
    queue.push(current);
  };

  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode.value());
    visited[currentNode.value()] = true;

    const children = currentNode.children();
    if (children !== null) {
      children.map(function(current) {
        if (typeof visited[current.value()] === 'undefined') {
          pushToQueue(current);
        }
      });
    }

  }

  return result;

};

module.exports = BFS;
