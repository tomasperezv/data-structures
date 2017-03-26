const TreeNode = require('./tree-node');

/**
 * @class TrieNode
 * @param {String|null} value
 * @public
 * @constructor
 */
const TrieNode = function(value) {
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
 * @param {Number} position
 * @public
 */
TrieNode.prototype.addWord = function(word, position) {

  if (typeof position === 'undefined') {
    position = 0;
  }

  const firstLetter = word.charAt(position);
  const pos = this._computeCharPos(firstLetter);
  if (typeof this._children[pos] === 'undefined') {
    this._children[pos] = new TrieNode(firstLetter);
  }

  // Update reference to the parent node
  this._children[pos]._parent = this;

  if (position === word.length - 1) {
    this._children[pos]._isWord = true;
  } else {
    this._children[pos].addWord(word, position+1);
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

  const pos = this._computeCharPos(character);

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

  let words = [];

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

  let result = this._value !== null ? this._value : '';

  if (this._parent !== null) {
    result = this._parent.toString() + this._value;
  }

  return result;

};

module.exports = TrieNode;
