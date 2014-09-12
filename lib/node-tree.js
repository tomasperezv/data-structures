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

  this._left = null;
  this._right = null;

};

NodeTree.prototype = new Node(0);

/**
 * @method left
 * @return null|Node
 * @public
 */
NodeTree.prototype.left = function() {
  return this._left;
};

/**
 * @method right
 * @return null|Node
 * @public
 */
NodeTree.prototype.right = function() {
  return this._right;
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

  this._left = left;

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

  this._right = right;

};

module.exports = Node;
