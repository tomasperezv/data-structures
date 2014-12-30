require('../algorithm');

LargestCommonSubstring = function() {
  Algorithm.call(this);
};

LargestCommonSubstring.prototype = new Algorithm();

/**
 * @param {String} S
 * @param {String} T
 * @return {Number}
 * @method solve
 */
LargestCommonSubstring.prototype.solve = function(S, T) {

  var i, j;
  var lcs = [];
  for (i = 0; i <= S.length; i++) {

    if (lcs.indexOf(i) === -1) {
      lcs[i] = [];
    }

    for (j = 0; j <= T.length; j++) {
      if (i === 0 || j === 0) {
        lcs[i][j] = 0;
      } else {
        if (S[i] === T[j]) {
          lcs[i][j] = lcs[i-1][j-1] + 1;
        } else {
          lcs[i][j] = Math.max(lcs[i-1][j], lcs[i][j-1]);
        }
      }
    }

  }

  return lcs[S.length][T.length];

};

module.exports = LargestCommonSubstring;
