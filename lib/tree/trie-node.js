var TreeNode = require('./tree-node');

/**
 * @class TrieNode
 * @param {String|null} value
 * @public
 * @constructor
 */
var TrieNode = function(value) {
  TreeNode.call(this, value);
  this._isWord = false;
  this._parent = null;
  this._children = {};
};

TrieNode.prototype = new TreeNode(0);

/**
 * @method _computeCharPos
 * @param {String} character
 * @return {Number}
 * @private
 */
TrieNode.prototype._computeCharPos = function(character) {
  character = character.toLowerCase();
  return character.charCodeAt(0) - 'a'.charCodeAt(0);
};

/**
 * @method addWord
 * @param {String} word
 * @public
 */
TrieNode.prototype.addWord = function(word) {
  var firstLetter = word.substring(0, 1);
  var pos = this._computeCharPos(firstLetter);
  if (typeof this._children[pos] === 'undefined') {
    this._children[pos] = new TrieNode(firstLetter);
  }

  // Update reference to the parent node
  this._children[pos]._parent = this;

  if (word.length === 1) {
    this._children[pos]._isWord = true;
  } else {
    this._children[pos].addWord(word.substring(1));
  }

};

/**
 * @method getChild
 * @param {String} character
 * @return {TrieNode|null}
 * @public
 */
TrieNode.prototype.getChild = function(character) {

  if (character.length === 0) {
    return null;
  }

  var pos = this._computeCharPos(character);

  if (typeof this._children[pos] === 'undefined') {
    return null;
  } else {
    return this._children[pos];
  }
};

/**
 * @method getWords
 * @return {Array}
 * @public
 */
TrieNode.prototype.getWords = function() {

  var words = [];

  if (this._isWord) {
    words.push(this.toString());
  }

  for (var key in this._children) {
    words = words.concat(this._children[key].getWords());
  }

  return words;

};

/**
 * @method toString
 * @return {String}
 * @public
 */
TrieNode.prototype.toString = function() {

  var result = this._value !== null ? this._value : '';

  if (this._parent !== null) {
    result = this._parent.toString() + this._value;
  }

  return result;

};

module.exports = TrieNode;
