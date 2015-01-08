var expect = require('expect.js');
var BinaryTree = require('../lib/binary-tree');
var BinaryTreeNode = require('../lib/binary-tree-node');

describe('BinaryTree', function(){

  describe('Creation', function() {

    it('Empty BinaryTrees', function() {
      var tree = new BinaryTree();
      expect(tree.root()).to.be(null);
    });

    it('Leave values must be BinaryTreeNode', function() {
      expect(function() {
        var tree = new BinaryTree(5);
      }).to.throwException();
    });

    it('Simple creation', function() {
      var root = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3));
      var tree = new BinaryTree(root);
      expect(tree.root().value()).to.be(1);
      expect(tree.root().left().value()).to.be(2);
      expect(tree.root().right().value()).to.be(3);
    });

  });

});
