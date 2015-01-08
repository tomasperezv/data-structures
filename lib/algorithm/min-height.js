var Algorithm = require('./algorithm');
/**
 * @constructor
 * @class MaxHeight
 */
var MaxHeight = function() {
  Algorithm.call(this);
};

MaxHeight.prototype = new Algorithm();

/**
 * Compute the max height of a binary tree.
 *
 * @method solve
 * @param {BinaryTreeNode} root
 * @return {Number}
 * @public
 */
MaxHeight.prototype.solve = function(root) {

  var queue = [root];
  var depth = [0];

  while (queue.length > 0) {
    var current = queue.shift();
    var currentDepth = depth.shift();

    if (current.isLeaf()) {
      return currentDepth;
    }

    if (current.right() !== null) {
      queue.push(current.right());
      depth.push(currentDepth+1);
    }

    if (current.left() !== null) {
      queue.push(current.left());
      depth.push(currentDepth+1);
    }
  }

};

module.exports = MaxHeight;
