// Initialize the namespace
var DS = DS || {};

// Namespace encapsulation for the Node data structure
DS = (function(namespace) {

  /**
   * @class List
   * @param Object value
   * @constructor
   * @throws DS.Exception.InvalidParameter
   */
  namespace.List = function() {
    this._first = null;
    this._head = null;
  };

  /**
   * @method insert
   * @param {Number} index
   * @param {DS.Node} node
   * @public
   */
  namespace.List.prototype.insert = function(index, node) {

    if (!(node instanceof DS.Node)) {
      throw new TypeError('Inserted value must be a DS.Node');
    }

    if (this._head === null) {
      this._head = node;
    } else {
      var current = this._head.next();
      this._head.setNext(node);
    }

  };

  /**
   * O(n)
   *
   * @method get
   * @param {Number} pos
   * @public
   */
  namespace.List.prototype.get = function(pos) {

    var value = null;
    var current = this._first;

    for (var i = 0; i <= pos; i++) {
      if (current !== null) {

        if (i === pos) {
          value = current.value();
          break;
        } else {
          current = current.next();
        }

      } else {
        break;
      }
    }

    return value;

  };

  return namespace;

})(DS);
