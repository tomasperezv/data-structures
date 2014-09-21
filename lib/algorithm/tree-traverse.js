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
 * @param {treeNode} tree
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
