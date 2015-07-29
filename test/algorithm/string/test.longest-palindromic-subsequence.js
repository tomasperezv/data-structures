var expect = require('expect.js');
var LongestPalindromicSubsequence = require('../../../lib/algorithm/string/longest-palindromic-subsequence.js');

describe('Longest Palindromic Subsequence', function(){

  it('Basic tests', function() {

    describe('Solve algorithm', function() {
      var longestPalindromicSubsequence = new LongestPalindromicSubsequence();
      expect(longestPalindromicSubsequence.solve('a')).eql(1);
      expect(longestPalindromicSubsequence.solve('aa')).eql(2);
      expect(longestPalindromicSubsequence.solve('aba')).eql(3);
    });

  });

});
