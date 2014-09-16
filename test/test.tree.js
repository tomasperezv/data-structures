/*global describe, it*/
var expect = require('expect.js');
var Tree = require('../lib/tree');
var TreeNode = require('../lib/tree-node');

describe('Tree', function(){

  describe('Creation', function() {

    it('Empty trees', function() {
      var tree = new Tree();
      expect(tree.getRoot()).to.be(null);
    });

    it('Leave values must be TreeNode', function() {
      expect(function() {
        var tree = new Tree(5);
      }).to.throwException();
    });

    it('Simple creation', function() {
      var child = [
        new TreeNode(2),
        new TreeNode(3)
      ];
      var root = new TreeNode(1, child);
      var tree = new Tree(root);
      expect(tree.getRoot().value()).to.be(1);
    });

  });

});