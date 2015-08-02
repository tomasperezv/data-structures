var InvalidParameter = require('./error/invalid-parameter');

/**
 * @class Node
 * @param {Object} value
 * @constructor
 * @throws InvalidParameter
 */
var Node = function(value) {

  if (typeof value === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  this._value = value;
  this._next = null;
  this._previous = null;
};

/**
 * @method value
 * @return {Object} value The value contained in the node
 * @public
 */
Node.prototype.value = function() {
  return this._value;
};

/**
 * @method next
 * @return null|Node
 * @public
 */
Node.prototype.next = function() {
  return this._next;
};

/**
 * @method previous
 * @return {null|Node}
 * @public
 */
Node.prototype.previous = function() {
  return this._previous;
};

/**
 * @param {Object} value
 * @method setValue
 * @public
 * @throws InvalidParameter
 */
Node.prototype.setValue = function(value) {

  if (typeof value === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  this._value = value;

};

/**
* @method _assertNode
* @param {Node} node
* @private
* @throws InvalidParameter
* @throws TypeError
*/
Node.prototype._assertNode = function(node) {
  if (typeof node === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  if (!(node instanceof Node)) {
    throw new TypeError('node value should be a Node');
  }
};

/**
 * @param {Node} next
 * @method setNext
 * @public
 * @throws InvalidParameter
 * @throws TypeError
 */
Node.prototype.setNext = function(next) {
  this._assertNode(next);
  this._next = next;
};

/**
 * @param {Node} previous
 * @method setPrevious
 * @public
 * @throws InvalidParameter
 */
Node.prototype.setPrevious = function(previous) {
  this._assertNode(previous);
  this._previous = previous;
};

module.exports = Node;
