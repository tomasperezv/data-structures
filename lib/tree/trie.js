const TrieNode = require('./trie-node');

/**
 * @class Trie
 * @public
 * @constructor
 */
const Trie = function() {
  this._root = new TrieNode(null);
};

/**
 * @method addWord
 * @param {String} word
 * @public
 */
Trie.prototype.addWord = function(word) {
  this._root.addWord(word);
};

/**
 * @method getWords
 * @param {String} prefix
 * @return {Array}
 * @public
 */
Trie.prototype.getWords = function(prefix) {
  let words = [];
  let current = this._root;
  let i = 0;

  while (i < prefix.length && current !== null) {
    current = current.getChild(prefix[i]);
    i++;
  }

  if (current !== null) {
    words = current.getWords();
  }

  return words;

};

module.exports = Trie;
