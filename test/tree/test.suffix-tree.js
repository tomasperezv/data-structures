var expect = require('expect.js');
var SuffixTree = require('../../lib/tree/suffix-tree');

describe('SuffixTree', function(){

  describe('Inserting words in a suffix tree', function() {

    it('Simple insertion and retrieval', function() {
      var suffixTree = new SuffixTree();
      suffixTree.addWord('retrieval');
      expect(suffixTree.getWords('etr')).eql(['etrieval']);
      expect(suffixTree.getWords('ev')).eql(['eval']);
    });

  });

  describe('Application of a suffix tree for computing common substrings', function() {

    it('Is q a substring of S', function() {
      var suffixTree = new SuffixTree();
      suffixTree.addWord('retrievaltrie');
      expect(suffixTree.isSubstring('trie')).eql(true);
      expect(suffixTree.isSubstring('invalid')).eql(false);
    });

    it('How many times does q appear in S', function() {
      var suffixTree = new SuffixTree();
      suffixTree.addWord('retrievaltrie');
      expect(suffixTree.countSubstring('trie')).eql(2);
      expect(suffixTree.countSubstring('invalid')).eql(0);
    });

    it('Longest common substring of S and q', function() {
      var suffixTree = new SuffixTree();
      suffixTree.addWord('retrievaltrieevaluat');
      expect(suffixTree.longestCommonSubstring('triennio')).eql('trie');
      expect(suffixTree.longestCommonSubstring('evaluation')).eql('evaluat');
      expect(suffixTree.longestCommonSubstring('')).eql('');
    });

  });

});
