var Algorithm = require('../algorithm');

/**
 * @method LongestPalindromicSubsequence
 * @constructor
 */
var LongestPalindromicSubsequence = function() {
  Algorithm.call(this);
};

LongestPalindromicSubsequence.prototype = new Algorithm();

/**
 * Apply Dinamic Programming to solve lps problem.
  @method solve
 * @param {String} word
 * @return {Number}
 * @public
 */
LongestPalindromicSubsequence.prototype.solve = function(word) {
  var i, j;
  var LS = [];
  var max = Number.MIN_VALUE;

  for (i = 0; i < word.length; i++) {
    for (j = 0; j < word.length; j++) {
      if (j === 0) {
        // Initialize the Matrix row
        LS.push([]);
      }

      if (i === j) {
        LS[i][j] = 1;
        continue;
      }

      var current = 0;
      if (word.charAt(i) === word.charAt(j)) {
        current = 2;
        if (j > i+1) {
          current += LS[i+1][j-1];
        }
        LS[i][j] = current;
      } else {
        LS[i][j] = Math.max(LS[i+1][j], LS[i][j-1]);
      }

    }
  }

  return LS[0][word.length-1];
};

module.exports = LongestPalindromicSubsequence;
