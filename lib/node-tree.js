/*global InvalidParameter, Node*/
require('./error/generic');
require('./node');

/**
 * @class Node
 * @param Object value
 * @constructor
 * @throws InvalidParameter
 */
var NodeTree = function(value, left, right) {
  Node.call(this, value);
  this.child = [null, null];

  if (typeof left !== 'undefined') {
    this.child[0] = left;
  }

  if (typeof right !== 'undefined') {
    this.child[1] = right;
  }

};

NodeTree.prototype = new Node(0);

/**
 * @method left
 * @return null|Node
 * @public
 */
NodeTree.prototype.left = function() {
  return this.child[0];
};

/**
 * @method right
 * @return null|Node
 * @public
 */
NodeTree.prototype.right = function() {
  return this.child[1];
};

/**
 * @param Node left
 * @method setLeft
 * @public
 * @throws InvalidParameter
 */
NodeTree.prototype.setLeft = function(left) {

  if (typeof left === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  if (!(left instanceof Node)) {
    throw new TypeError('Left value should be a Node');
  }

  this.child[0] = left;

};

/**
 * @param Node rigth
 * @method setRight
 * @public
 * @throws InvalidParameter
 */
NodeTree.prototype.setRight = function(right) {

  if (typeof right === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  if (!(right instanceof Node)) {
    throw new TypeError('Right value should be a Node');
  }

  this.child[1] = right;

};

module.exports = NodeTree;
