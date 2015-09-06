var expect = require('expect.js');
var TernaryTree = require('../../lib/tree/ternary-tree');

describe('TernaryTree', function(){

  describe('Inserting and retrieval', function() {

    it('Simple insertion and retrieval of words', function() {
      var ternaryTree = new TernaryTree();
      ternaryTree.insert('test');
      expect(ternaryTree.contains('test')).eql(true);
      expect(ternaryTree.contains('testa')).eql(false);
    });

  });

});
