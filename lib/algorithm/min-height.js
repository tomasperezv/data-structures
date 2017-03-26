const Algorithm = require('./algorithm');
/**
 * @constructor
 * @class MinHeight
 */
const MinHeight = function() {
  Algorithm.call(this);
};

MinHeight.prototype = new Algorithm();

/**
 * Compute the min height of a binary tree.
 *
 * @method solve
 * @param {BinaryTreeNode} root
 * @return {Number}
 * @public
 */
MinHeight.prototype.solve = function(root) {

  const queue = [root];
  const depth = [0];

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

module.exports = MinHeight;
