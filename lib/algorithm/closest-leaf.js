var MinHeight = require('./min-height');

/**
 * @constructor
 * @class ClosestLeaf
 */
var ClosestLeaf = function() {
  Algorithm.call(this);
  this.minHeight = new MinHeight();
};

ClosestLeaf.prototype = new Algorithm();

/**
 * @method solve
 * @param {BinaryTree} tree
 * @param {BinaryTreeNode} node
 * @return {Number}
 * @public
 */
ClosestLeaf.prototype.solve = function(tree, node) {

  if (node.isLeaf()) {
    return 0;
  }

  var treeHeight = this.minHeight.solve(tree.root());
  var depthToNode = tree.root().depthToNode(node.value());
  var heightFromNode = this.minHeight.solve(node);

  return Math.min(treeHeight + depthToNode, heightFromNode);

};

module.exports = ClosestLeaf;
