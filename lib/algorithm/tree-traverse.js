/**
 * Pre-order, in-order and post-order traverse on binary trees.
 *
 * @author Tomas Perez <tom@0x101.com>
 */

var Algorithm = require('./algorithm');
var TreeTraverse = function() {
  Algorithm.call(this);
};

TreeTraverse.prototype = new Algorithm();

/**
 * @param {BinaryTreeNode} treeNode
 * @method postorder
 * @return {Array}
 */
TreeTraverse.prototype.postorder = function(treeNode) {

  if (!treeNode) {
    return;
  }

  var result = [];
  var self = this;

  treeNode.children().map(function(current) {
    if (current !== null) {
      result = result.concat(self.postorder(current));
    }
  });

  result.push(treeNode.value());

  return result;

};

/**
 * @param {BinaryTreeNode} binaryTreeNode
 * @method postorder
 * @return {Array}
 */
TreeTraverse.prototype.inorder = function(binaryTreeNode) {

  if (!binaryTreeNode) {
    return;
  }

  var result = [];
  var self = this;

  if (binaryTreeNode.left() !== null) {
    result = result.concat(self.inorder(binaryTreeNode.left()));
  }

  result.push(binaryTreeNode.value());

  if (binaryTreeNode.right() !== null) {
    result = result.concat(self.inorder(binaryTreeNode.right()));
  }

  return result;

};

/**
 * @param {BinaryTreeNode} treeNode
 * @method preorder
 * @return {Array}
 */
TreeTraverse.prototype.preorder = function(treeNode) {

  if (!treeNode) {
    return;
  }

  var result = [];
  var self = this;
  result.push(treeNode.value());

  treeNode.children().map(function(current) {
    if (current !== null) {
      result = result.concat(self.preorder(current));
    }
  });

  return result;

};

module.exports = TreeTraverse;
