// Initialize the namespace
var DS = DS || {};

// Namespace encapsulation for the Node data structure
DS = (function(namespace) {

  /**
   * @class Node
   * @param Object value
   * @constructor
   * @throws DS.Exception.InvalidParameter
   */
  namespace.Node = function(value) {

    if (typeof value === 'undefined') {
      throw new namespace.Exception.InvalidParameter('Missing parameter');
    }

    this._value = value;
    this._next = null;
  };

  /**
   * @method getValue
   * @return {Object} value The value contained in the node
   * @public
   */
  namespace.Node.prototype.getValue = function() {
    return this._value;
  };

  /**
   * @method next
   * @return null|Node
   * @public
   */
  namespace.Node.prototype.next = function() {
    return this._next;
  };

  /**
   * @param Object value
   * @method setValue
   * @public
   * @throws DS.Exception.InvalidParameter
   */
  namespace.Node.prototype.setValue = function(value) {

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
  namespace.Node.prototype.setNext = function(next) {

    if (typeof next === 'undefined') {
      throw new namespace.Exception.InvalidParameter('Missing parameter');
    }

    if (!(next instanceof DS.Node)) {
      throw new TypeError('next value should be a DS.Node');
    }

    this._next = next;

  };

  return namespace;

})(DS);
