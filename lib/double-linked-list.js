require('./list');
require('./error/generic');

/**
 * @class List
 * @constructor
 */
DoubleLinkedList = function() {
  List.call(this);
};

DoubleLinkedList.prototype = new List();

/**
 * O(n)
 *
 * @method insert
 * @param {Number} index
 * @param {Node} node
 * @public
 */
DoubleLinkedList.prototype.insert = function(index, node) {

  if (!(node instanceof Node)) {
    throw new TypeError('Inserted value must be a Node');
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
      throw new InvalidParameter('Index not found ' + index);
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
DoubleLinkedList.prototype.get = function(pos) {

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

module.exports = DoubleLinkedList;
