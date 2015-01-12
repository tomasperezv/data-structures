var expect = require('expect.js');
var ClosestLeaf = require('../../lib/algorithm/closest-leaf');
var BinaryTree = require('../../lib/tree/binary-tree');
var BinaryTreeNode = require('../../lib/tree/binary-tree-node');

describe('Closest leaf', function(){

  describe('Solve algorithm', function() {

    it('Determine the closest leaf in a binary tree', function() {

      var leftChild = new BinaryTreeNode(2);
      var rightChild = new BinaryTreeNode(3, new BinaryTreeNode(3));

      var root = new BinaryTreeNode(1, leftChild, rightChild);
      var tree = new BinaryTree(root);

      var closest = new ClosestLeaf();
      expect(closest.solve(tree, leftChild)).eql(0);
      expect(closest.solve(tree, rightChild)).eql(1);

    });

  });

});
