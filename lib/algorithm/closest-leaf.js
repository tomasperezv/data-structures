const Algorithm = require('./algorithm');
const MinHeight = require('./min-height');

/**
 * @constructor
 * @class ClosestLeaf
 */
const ClosestLeaf = function() {
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

  const treeHeight = this.minHeight.solve(tree.root());
  const depthToNode = tree.root().depthToNode(node.value());
  const heightFromNode = this.minHeight.solve(node);

  return Math.min(treeHeight + depthToNode, heightFromNode);

};

module.exports = ClosestLeaf;
