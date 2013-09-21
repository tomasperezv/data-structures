/**
 * @class List
 * @param Object value
 * @constructor
 * @throws DS.Exception.InvalidParameter
 */
List = function() {
  this._head = null;
};

/**
 * O(n)
 *
 * @method insert
 * @param {Number} index
 * @param {DS.Node} node
 * @public
 */
List.prototype.insert = function(index, node) {

  if (!(node instanceof DS.Node)) {
    throw new TypeError('Inserted value must be a DS.Node');
  }

  if (this._head === null) {
    this._head = node;
  } else {

    var previous = this._head;
    var current = this._head.next();

    for (var i = 1; i <= index; i++) {
      
      if (i === index) {

        if (current === null) {
          previous.setNext(node);
        } else {
          node.setNext(current);
          previous.setNext(node);
        }
        break;
      } else if (current === null) {
        break;
      }

      previous = current;
      current = current.next();

    }

    if (i < index) {
      throw new DS.Exception.InvalidParameter('Index not found ' + index);
    }

  }

};

/**
 * O(n)
 *
 * @method get
 * @param {Number} pos
 * @public
 */
List.prototype.get = function(pos) {

  var value = null;
  var current = this._head;

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

module.exports = List;
