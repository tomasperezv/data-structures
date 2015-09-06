var TernaryTreeNode = require('./ternary-tree-node');

/**
 * The TernaryTree is a data structure similar to a Trie, with a more
 * efficient memory usage, it's intended for applications where we need
 * 'type-ahead' or autocomplete functionality.
 *
 * @constructor
 * @class TernaryTree
 */
var TernaryTree = function() {
  this._root = null;
};

/**
 * @method insert
 * @param {String} word
 * @param {Number} position
 * @param {TernaryTreeNode} node
 * @public
 */
TernaryTree.prototype.insert = function(word, position, node) {

  if (typeof position === 'undefined') {
    position = 0;
  }

  var firstChar = word.charAt(position);

  if (typeof node === 'undefined') {
    this._root = new TernaryTreeNode(firstChar, position === (word.length - 1));
    node = this._root;
  }

  if (firstChar < node._value) {

    if (node._left === null) {
      node._left = new TernaryTreeNode(firstChar, position === (word.length - 1));
    }

    this.insert(word, position, node._left);

  } else if (firstChar > node._value) {

    if (node._right === null) {
      node._right = new TernaryTreeNode(firstChar, position === (word.length - 1));
    }

    this.insert(word, position, node._right);

  } else if (position < (word.length - 1)) {

    if (node._center === null) {
      node._center = new TernaryTreeNode(word.charAt(position+1), position === (word.length - 2));
    }

    this.insert(word, position+1, node._center);
  }
};

/**
* @method contains
* @param {String} word
* @return {Boolean}
* @public
*/
TernaryTree.prototype.contains = function(word) {

  var position = 0;
  var node = this._root;

  while (node !== null && position < word.length) {

    var currentChar = word.charAt(position);

    if (currentChar < node._value) {
      node = node._left;
    } else if (currentChar > node._value) {
      node = node._right;
    } else {

      if (position === word.length - 1) {
        return true;
      } else {
        node = node._center;
      }

    }

    position++;

  }

  return false;
};

module.exports = TernaryTree;
