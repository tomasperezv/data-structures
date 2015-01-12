var Trie = require('./trie');
var SuffixTree = function() {
  Trie.call(this);
};

SuffixTree.prototype = new Trie();

/**
 * @method addWord
 * @param {String} word
 * @public
 */
SuffixTree.prototype.addWord = function(word) {
  var i;
  for (i = 0; i < word.length; i++) {
    var suffix = word.substring(i);
    Trie.prototype.addWord.call(this, suffix);
  }
};

/**
 * @method commonSubstrings
 * @param {String} word
 * @return {Array}
 * @public
 */
SuffixTree.prototype.commonSubstrings = function() {
};

/**
 * Is q a substring of S?
 *
 * @method isSubstring
 * @param {String} q
 * @return {Boolean}
 * @public
 */
SuffixTree.prototype.isSubstring = function(q) {
  return this.getWords(q).length > 0;
};

/**
 * How many times does q appear in S?
 *
 * @method countSubstring
 * @param {String} q
 * @return {Number}
 * @public
 */
SuffixTree.prototype.countSubstring = function(q) {
  return this.getWords(q).length;
};

/**
 * Longest common substring of S and q.
 *
 * @method longestCommonSubstring
 * @param {String} q
 * @return {String}
 * @public
 */
SuffixTree.prototype.longestCommonSubstring = function(q) {

  var i, j;
  var longest = {
    length: 0,
    str: ''
  };

  for (i = 0; i < q.length; i++) {

    var currentSuffix = q.substring(i);
    var current = this._root;
    j = 0;

    while (j < currentSuffix.length && current !== null) {

      if (j > longest.length) {
        longest.length = j;
        longest.str = currentSuffix.substring(0, j);
      }

      current = current.getChild(currentSuffix[j]);
      j++;

    }

    i += j;

  }

  return longest.str;

};

module.exports = SuffixTree;
