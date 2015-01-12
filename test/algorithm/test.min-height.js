/*global describe, it*/
var expect = require('expect.js');
var BinaryTree = require('../../lib/tree/binary-tree');
var BinaryTreeNode = require('../../lib/tree/binary-tree-node');
var MinHeight = require('../../lib/algorithm/min-height');

describe('Min Height in binary trees', function(){

  describe('Solve', function() {

    it('Empty BinaryTrees', function() {
      var tree = new BinaryTree();
      expect(tree.root()).to.be(null);
    });

    it('Basic cases', function() {
      var root = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3));
      var minHeight = new MinHeight();
      expect(minHeight.solve(root)).to.be(1);
    });

  });

});
