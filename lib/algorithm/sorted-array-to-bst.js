const Algorithm = require('./algorithm');
const BinaryTreeNode = require('../tree/binary-tree-node');

/**
 * @constructor
 */
const SortedArrayToBST = function() {
  Algorithm.apply(this);
};

SortedArrayToBST.prototype = new Algorithm();

/**
 * @method SortedArrayToBST
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 * @return {BinaryTreeNode}
 * @public
 */
SortedArrayToBST.prototype.solve = function(a, left, right) {

  if (a.length === 0) {
    return null;
  }

  if (typeof left === 'undefined') {
    left = 0;
  }

  if (typeof right === 'undefined') {
    right = a.length - 1;
  }

  if (left > right) {
    return null;
  }

  const median = Math.floor((left + right) / 2);
  const root = new BinaryTreeNode(a[median]);

  const leftTreeNode = this.solve(a, left, median-1);
  const rightTreeNode = this.solve(a, median+1, right);

  if (leftTreeNode !== null) {
    root.setLeft(leftTreeNode);
  }

  if (rightTreeNode !== null) {
    root.setRight(rightTreeNode);
  }

  return root;

};

module.exports = SortedArrayToBST;
