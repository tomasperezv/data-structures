const Algorithm = require('../algorithm');

/**
 * @method LongestPalindromicSubsequence
 * @constructor
 */
const LongestPalindromicSubsequence = function() {
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
  let i, j;
  const LS = [];
  let max = Number.MIN_VALUE;

  // Initialize the matrix
  for (i = 0; i < word.length; i++) {
    for (j = 0; j < word.length; j++) {
      if (j === 0) {
        LS.push([]);
      }
      if (i === j) {
        LS[i][j] = 1;
      } else if (i > j) {
        // Those positions are basically ignored.
        // Positions below the diagonal are not relevant. If the origin char is
        // greater than the destination means that we can't compose a string.
        LS[i][j] = 0;
      }
    }
  }

  for (i = 0; i < word.length; i++) {
    for (j = 0; j < word.length; j++) {

      if (i === j || i > j) {
        continue;
      }

      if (word.charAt(i) === word.charAt(j)) {
        LS[i][j] = 2 + LS[i+1][j-1];
      } else {
        var candidateA = i > 0 ? LS[i-1][j] : 1;
        var candidateB = j > 0 ? LS[i][j-1] : 1;
        LS[i][j] = Math.max(candidateA, candidateB);
      }

      if (LS[i][j] > max) {
        max = LS[i][j];
      }

    }
  }

  return LS[0][word.length-1];

};

module.exports = LongestPalindromicSubsequence;
