/*global InvalidParameter*/
require('./error/generic');
var TreeNode = require('./tree-node');

/**
 * @class BinaryTreeNode
 * @param {Object} value
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
 * @method _assertType
 * @param {BinaryTreeNode] binaryTreeNode
 * @private
 */
BinaryTreeNode._assertType = function(binaryTreeNode) {

  if (typeof binaryTreeNode === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  if (!(binaryTreeNode instanceof BinaryTreeNode)) {
    throw new TypeError('Parameter should be a BinaryTreeNode');
  }

};

/**
 * @method left
 * @return {null|BinaryTreeNode}
 * @public
 */
BinaryTreeNode.prototype.left = function() {
  return this._children[0];
};

/**
 * @method right
 * @return {null|BinaryTreeNode}
 * @public
 */
BinaryTreeNode.prototype.right = function() {
  return this._children[1];
};

/**
 * @param {BinaryTreeNode} left
 * @method setLeft
 * @public
 * @throws InvalidParameter
 */
BinaryTreeNode.prototype.setLeft = function(left) {
  this._assertType(left);
  this._children[0] = left;
};

/**
 * @param {BinaryTreeNode} rigth
 * @method setRight
 * @public
 * @throws InvalidParameter
 */
BinaryTreeNode.prototype.setRight = function(right) {
  this._assertType(right);
  this._children[1] = right;
};

module.exports = BinaryTreeNode;
