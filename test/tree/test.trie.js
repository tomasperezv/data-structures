var expect = require('expect.js');
var Trie = require('../../lib/tree/trie');

describe('Trie', function(){

  describe('Inserting and retrieval', function() {

    it('Simple insertion and retrieval of words', function() {
      var trie = new Trie();
      trie.addWord('test');
      trie.addWord('text');
      trie.addWord('abcd');
      expect(trie.getWords('te')).eql(['test', 'text']);
      expect(trie.getWords('tes')).eql(['test']);
      expect(trie.getWords('test')).eql(['test']);
    });

  });

});
