var expect = require('expect.js');
var ValidBST = require('../../lib/algorithm/valid-bst')
var BinaryTreeNode = require('../../lib/binary-tree-node');
var BinarySearchTree = require('../../lib/binary-search-tree');

describe('Valid Binary Search Tree', function(){

  describe('Solve algorithm', function() {

    it('Given a Binary Search Tree, determine if it\'s valid', function() {

      var root = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3));
      var tree = new BinarySearchTree(root);

      var validBST = new ValidBST();
      expect(validBST.solve(tree)).eql(true);

      expect(validBST.solve(new BinarySearchTree())).eql(true);

    });

  });

});
