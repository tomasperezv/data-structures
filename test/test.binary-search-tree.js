/*global describe, it*/
var expect = require('expect.js');
var BinarySearchTree = require('../lib/binary-search-tree');

describe('BinaryTree', function(){

  describe('Creation', function() {

    it('Empty BinarySearchTree', function() {
      var tree = new BinarySearchTree();
      expect(tree.root()).to.be(null);
    });

    it('Simple BinarySearchTree', function() {
      var tree = new BinarySearchTree(5);
      expect(tree.root().value()).to.be(5);
    });

  });

  describe('Inserting elements in a Binary Search Tree', function() {

    it('Basic insertion', function() {
      var tree = new BinarySearchTree(5);
      tree.insert(tree.root(), 3);
      expect(tree.root().left().value()).to.be(3);
      expect(tree.root().right()).to.be(null);
      tree.insert(tree.root(), 6);
      expect(tree.root().right().value()).to.be(6);
    });

  });

  describe('Get largest element in a Binary Search Tree', function() {

    it('Construct the BST and search for the largest', function() {
      var tree = new BinarySearchTree(5);
      tree.insert(tree.root(), 3);
      tree.insert(tree.root(), 6);
      tree.insert(tree.root(), 8);
      tree.insert(tree.root(), 5);
      expect(tree.findLargest(tree.root())).to.be(8);
    });

  });

});
