const Tree = require('./tree');
const BinaryTreeNode = require('./binary-tree-node');

/**
 * @class BinaryTree
 * @param {BinaryTreeNode} root
 * @constructor
 * @throws TypeError
 */
const BinaryTree = function(root) {

  if (typeof root !== 'undefined' && !(root instanceof BinaryTreeNode)) {
    throw new TypeError('Root value must be a BinaryTreeNode.');
  }

  if (typeof root === 'undefined') {
    root = null;
  }

  this._root = root;

};

BinaryTree.prototype = new Tree();

/**
 * @method left
 * @return {BinaryTreeNode|null}
 * @constructor
 * @throws InvalidParameter
 */
BinaryTree.prototype.left = function() {
  return this._root.children()[0];
};

/**
 * @method right
 * @param {BinaryTreeNode|null}
 * @constructor
 * @throws InvalidParameter
 */
BinaryTree.prototype.right = function() {
  return this._root.children()[1];
};

/**
 * @method setLeft
 * @param {BinaryTreeNode} left
 * @constructor
 * @throws InvalidParameter
 */
BinaryTree.prototype.setLeft = function(left) {
  if (typeof left === 'undefined') {
    left = null;
  }

  this._root.children()[0] = left;
};

/**
 * @method setRight
 * @param {BinaryTreeNode} right
 * @constructor
 * @throws InvalidParameter
 */
BinaryTree.prototype.setRight = function(right) {
  if (typeof right === 'undefined') {
    right = null;
  }

  this._root.children()[1] = right;
};

module.exports = BinaryTree;
