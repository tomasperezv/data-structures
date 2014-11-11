/*global Algorithm, InvalidParameter, Node*/
require('./error/generic');
var BinaryTree = require('./binary-tree');
var BinaryTreeNode = require('./binary-tree-node');

/**
 * @constructor
 * @class BinarySearchTree
 * @param {Number} rootValue
 * @public
 */
var BinarySearchTree = function(rootValue) {

  var params = [];
  if (typeof rootValue !== 'undefined') {
    var rootNode = new BinaryTreeNode(rootValue);
    params.push(rootNode);
  }

  BinaryTree.apply(this, params);

};

BinarySearchTree.prototype = new BinaryTree();

/**
 * Insert a new element in the BST.
 * O(1)
 *
 * @method insert
 * @param {BinaryTreeNode} root
 * @param {Number} value
 * @public
 */
BinarySearchTree.prototype.insert = function(root, value) {

  var valueNode = new BinaryTreeNode(value);

  if (root === null) {
    root = valueNode;
  } else {
    if (value < root.value()) {
      if (root.left() !== null) {
        return this.insert(root.left(), value);
      } else {
        root.setLeft(valueNode);
      }
    } else {
      if (root.right() !== null) {
        return this.insert(root.right(), value);
      } else {
        root.setRight(valueNode);
      }
    }
  }

};

/**
 * Find largest element in the BST.
 * O(log n)
 *
 * @method findLargest
 * @param {BinaryTreeNode} root
 * @return {null|Number}
 * @public
 */
BinarySearchTree.prototype.findLargest = function(root) {

  // If the tree is empty we will return null
  if (root === null) {
    return null;
  } else {
    if (root.right() === null) {
      return root.value();
    } else {
      return this.findLargest(root.right());
    }
  }

};

module.exports = BinarySearchTree;
