/*global expect, require, describe, it, BFS, Tree*/

var expect = require('expect.js');
var BFS = require('../lib/algorithm/bfs.js');
var TreeNode = require('../lib/tree-node');
var Tree = require('../lib/tree');

describe('BFS', function(){

  describe('Solve algorithm', function() {

    it('BFS simple search', function() {

      var root = new TreeNode(1);
      root.setLeft(new TreeNode(2));
      root.setRight(new TreeNode(3));
      root.left().setLeft(new TreeNode(4));
      root.left().setRight(new TreeNode(5));

      var tree = new Tree(root);

      var bfs = new BFS();
      var result = bfs.solve(tree);
      expect(result).eql([1, 2, 3, 4, 5]);

    });

  });

});
