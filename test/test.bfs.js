/*global expect, require, describe, it, BFS, Tree*/

var expect = require('expect.js');
var BFS = require('../lib/algorithm/bfs.js');
var NodeTree = require('../lib/node-tree');
var Tree = require('../lib/tree');

describe('BFS', function(){

  describe('Solve algorithm', function() {

    it('BFS simple search', function() {

      var root = new NodeTree(1);
      root.setLeft(new NodeTree(2));
      root.setRight(new NodeTree(3));
      root.left().setLeft(new NodeTree(4));
      root.left().setRight(new NodeTree(5));

      var tree = new Tree(root);

      var bfs = new BFS();
      var result = bfs.solve(tree);
      expect(result).eql([1, 2, 3, 4, 5]);

    });

  });

});
