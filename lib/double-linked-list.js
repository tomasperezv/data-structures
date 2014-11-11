require('./list');
require('./error/generic');
var Node = require('../lib/node');

/**
 * @class List
 * @constructor
 */
DoubleLinkedList = function() {
  List.call(this);
  this._tail = null;
};

DoubleLinkedList.prototype = new List();

/**
 * O(1)
 *
 * @method insert
 * @param {Node} node
 * @public
 */
DoubleLinkedList.prototype.insert = function(node) {

  if (!(node instanceof Node)) {
    throw new TypeError('Inserted value must be a Node');
  }

  if (this._head === null) {
    this._head = node;
    this._tail = null;
  } else if (this._tail === null) {
    this._tail = node;
    this._head.setNext(this._tail);
    this._tail.setPrevious(this._head);
  } else {
    var previous = this._tail;
    this._tail.setNext(node);
    // Update the reference to the tail
    this._tail = this._tail.next();
    this._tail.setPrevious(previous);
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
