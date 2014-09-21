/*global require, describe, it*/

var expect = require('expect.js');
var BinaryTree = require('../lib/binary-tree.js');
var BinaryTreeNode = require('../lib/binary-tree-node.js');
var TreeTraverse = require('../lib/algorithm/tree-traverse.js');

describe('TreeTraverse', function(){

  describe('In Order', function() {

    it('Traverses properly a binary tree in-order', function() {
      var root = new BinaryTreeNode(1);
      var left = new BinaryTreeNode(2);
      var right = new BinaryTreeNode(3);

      var binaryTree = new BinaryTree(root);
      binaryTree.setLeft(left);
      binaryTree.setRight(right);
      var treeTraverseAlgorithm = new TreeTraverse();
      var result = treeTraverseAlgorithm.preorder(binaryTree.root());
      expect(result).eql([1, 2, 3]);
    });

  });

});
