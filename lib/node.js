/**
 * @class Node
 * @param Object value
 * @constructor
 * @throws DS.Exception.InvalidParameter
 */
Node = function(value) {

  if (typeof value === 'undefined') {
    throw new namespace.Exception.InvalidParameter('Missing parameter');
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
 * @param Object value
 * @method setValue
 * @public
 * @throws DS.Exception.InvalidParameter
 */
Node.prototype.setValue = function(value) {

  if (typeof value === 'undefined') {
    throw new namespace.Exception.InvalidParameter('Missing parameter');
  }

  this._value = value;

};

/**
 * @param Node next
 * @method setNext
 * @public
 * @throws DS.Exception.InvalidParameter
 */
Node.prototype.setNext = function(next) {

  if (typeof next === 'undefined') {
    throw new namespace.Exception.InvalidParameter('Missing parameter');
  }

  if (!(next instanceof DS.Node)) {
    throw new TypeError('next value should be a DS.Node');
  }

  this._next = next;

};

module.exports = Node;
