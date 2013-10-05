require('./error/generic');

/**
 * @class Node
 * @param Object value
 * @constructor
 * @throws InvalidParameter
 */
Node = function(value) {

  if (typeof value === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  this._value = value;
  this._next = null;
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
 * @return null|Node
 * @public
 */
Node.prototype.previous = function() {
  return this._previous;
};

/**
 * @param Object value
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
 * @param Node next
 * @method setNext
 * @public
 * @throws InvalidParameter
 */
Node.prototype.setNext = function(next) {

  if (typeof next === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  if (!(next instanceof Node)) {
    throw new TypeError('next value should be a Node');
  }

  this._next = next;

};

/**
 * @param Node previous
 * @method setPrevious
 * @public
 * @throws InvalidParameter
 */
Node.prototype.setPrevious = function(previous) {

  if (typeof next === 'undefined') {
    throw new InvalidParameter('Missing parameter');
  }

  if (!(previous instanceof Node)) {
    throw new TypeError('next value should be a Node');
  }

  this._previous = previous;

};


module.exports = Node;
