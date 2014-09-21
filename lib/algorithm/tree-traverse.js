/*global Algorithm, InvalidParameter*/

/**
 * Pre-order, in-order and post-order traverse on binary trees.
 *
 * @author Tomas Perez <tom@0x101.com>
 */

require('./algorithm');
require('../error/generic');
var BinaryTree = require('../binary-tree');

var TreeTraverse = function() {
  Algorithm.call(this);
};

TreeTraverse.prototype = new Algorithm();

/**
 * @param {BinaryTreeNode} tree
 * @method preorder
 * @return {Array}
 */
TreeTraverse.prototype.preorder = function(binaryTreeNode) {

  if (!binaryTreeNode) {
    return;
  }

  var result = [];
  result.push(binaryTreeNode.value());

  if (binaryTreeNode.left() !== null) {
    result = result.concat(this.preorder(binaryTreeNode.left()));
  }

  if (binaryTreeNode.right() !== null) {
    result = result.concat(this.preorder(binaryTreeNode.right()));
  }

  return result;

};

module.exports = TreeTraverse;
