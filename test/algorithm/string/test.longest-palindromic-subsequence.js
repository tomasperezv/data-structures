var expect = require('expect.js');
var LongestPalindromicSubsequence = require('../../../lib/algorithm/string/longest-palindromic-subsequence.js');

describe('Longest Palindromic Subsequence', function(){

  it('Basic tests', function() {

    describe('Solve algorithm', function() {
      var longestPalindromicSubsequence = new LongestPalindromicSubsequence();
      expect(longestPalindromicSubsequence.solve('abcd')).eql(1);
      expect(longestPalindromicSubsequence.solve('abbd')).eql(2);
      expect(longestPalindromicSubsequence.solve('acbc')).eql(3);
    });

  });

});
