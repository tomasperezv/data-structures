/*global describe, it*/
var expect = require('expect.js');
var Tree = require('../lib/tree');
var NodeTree = require('../lib/node-tree');

describe('Tree', function(){

  describe('Creation', function() {

    it('Empty trees', function() {
      var tree = new Tree();
      expect(tree.getRoot()).to.be(null);
    });

    it('Leave values must be NodeTree', function() {
      expect(function() {
        var tree = new Tree(5);
      }).to.throwException();
    });

    it('Simple creation', function() {
      var root = new NodeTree(1, 2, 3);
      var tree = new Tree(root);
      expect(tree.getRoot().value()).to.be(1);
      expect(tree.getRoot().left()).to.be(2);
      expect(tree.getRoot().right()).to.be(3);
    });

  });

});
