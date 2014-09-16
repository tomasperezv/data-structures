/*global InvalidParameter, TreeNode*/
require('./error/generic');
var TreeNode = require('./tree-node');

/**
 * @class BinaryTreeNode
 * @param Object value
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

  TreeNode.call(this, value, [left, right]);

};

BinaryTreeNode.prototype = new TreeNode(0);

/**
 * @method left
 * @return null|Node
 * @public
 */
BinaryTreeNode.prototype.left = function() {
  return this._children[0];
};

/**
 * @method right
 * @return null|Node
 * @public
 */
BinaryTreeNode.prototype.right = function() {
  return this._children[1];
};

/**
 * @param Node left
 * @method setLeft
 * @public
 * @throws InvalidParameter
 */
BinaryTreeNode.prototype.setLeft = function(left) {

  if (typeof left === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  if (!(left instanceof TreeNode)) {
    throw new TypeError('Left value should be a TreeNode');
  }

  this._children[0] = left;

};

/**
 * @param Node rigth
 * @method setRight
 * @public
 * @throws InvalidParameter
 */
BinaryTreeNode.prototype.setRight = function(right) {

  if (typeof right === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  if (!(right instanceof TreeNode)) {
    throw new TypeError('Right value should be a TreeNode');
  }

  this._children[1] = right;

};

module.exports = BinaryTreeNode;
