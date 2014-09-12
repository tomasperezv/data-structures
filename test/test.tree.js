/*global describe, it*/
var expect = require('expect.js');
var Tree = require('../lib/tree');

describe('Tree', function(){

  describe('Insertion', function() {

    it('Creation of empty trees', function() {
      var tree = new Tree();
      expect(tree.getRoot()).to.be(null);
    });

    it('Node values must be NodeTree', function() {
      expect(function() {
        var tree = new Tree(5);
      }).to.throwException();
    });

  });

});
