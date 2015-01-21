/**
 * Implementation of the Depth First Search algorithm
 *
 * @author Tomas Perez <tom@0x101.com>
 */

var Algorithm = require('./algorithm');

var DFS = function() {
  Algorithm.call(this);
};

DFS.prototype = new Algorithm();

/**
 * @param {Tree} tree
 * @return {Array} result List of NodeTrees returned by the BFS search.
 * @method solve
 */
DFS.prototype.solve = function(tree) {

  var i;
  var path = [];

  var nodes = [tree.root()];
  var visited = {};

  while (nodes.length > 0) {

    var current = nodes.pop();
    path.push(current.value());
    visited[current.value()] = true;

    var children = current.children();

    if (children !== null) {
      for (i = children.length-1; i >= 0; i--) {
        if (children[i] !== null && typeof visited[children[i].value()] === 'undefined') {
          nodes.push(children[i]);
        }
      }
    }


  }

  return path;

};

/**
 * @method solveIterative
 * @param {TreeNode} root
 * @param {Array?null} path
 * @return {Array}
 * @public
 */
DFS.prototype.solveIterative = function(root, path) {
  if (typeof path === 'undefined') {
    path = [];
  }

  path.push(root.value());

  var self = this;
  var children = root.children();
  if (children !== null) {
    children.map(function(current) {
      self.solveIterative(current, path);
    });
  }

  return path;
};

module.exports = DFS;
