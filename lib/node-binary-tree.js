/*global InvalidParameter, TreeNode*/
require('./error/generic');
require('./tree-node');

/**
 * @class BinaryTreeNode
 * @param Object value
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @constructor
 * @throws InvalidParameter
 */
var BinaryTreeNode = function(value, left, right) {

  if (typeof left === 'undefined') {
    left = null;
  }

  if (typeof right === 'undefined') {
    right = null;
  }

  TreeNode.call(this, [left, right]);
};

BinaryTreeNode.prototype = new TreeNode(0);

/**
 * @method left
 * @return null|Node
 * @public
 */
NodeTree.prototype.left = function() {
  return this._child[0];
};

/**
 * @method right
 * @return null|Node
 * @public
 */
NodeTree.prototype.right = function() {
  return this._child[1];
};

/**
 * @param TreeNode left
 * @method setLeft
 * @public
 * @throws InvalidParameter
 */
NodeTree.prototype.setLeft = function(left) {

  if (typeof left === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  if (!(left instanceof TreeNode)) {
    throw new TypeError('Left value should be a TreeNode');
  }

  this.child[0] = left;

};

/**
 * @param TreeNode rigth
 * @method setRight
 * @public
 * @throws InvalidParameter
 */
NodeTree.prototype.setRight = function(right) {

  if (typeof right === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  if (!(right instanceof TreeNode)) {
    throw new TypeError('Right value should be a TreeNode');
  }

  this.child[1] = right;

};

module.exports = BinaryTreeNode;
