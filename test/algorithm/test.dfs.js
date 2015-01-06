var expect = require('expect.js');
var DFS = require('../../lib/algorithm/dfs.js');
var TreeNode = require('../../lib/tree-node');
var Tree = require('../../lib/tree');

describe('DFS', function(){

  describe('Solve algorithm', function() {

    /**
     * @method generateTree
     * @return {Tree}
     * @public
     */
    var generateTree = function() {
      var children = [new TreeNode(2), new TreeNode(3)];
      var root = new TreeNode(1, children);
      root.children()[0].setChildren([new TreeNode(4), new TreeNode(5)]);

      return new Tree(root);
    }

    it('DFS simple search, iterative version', function() {

      var tree = generateTree();

      var dfs = new DFS();
      var result = dfs.solve(tree);
      expect(result).eql([1, 2, 4, 5, 3]);

    });

    it('DFS simple search, recursive version', function() {

      var tree = generateTree()

      var dfs = new DFS();
      var result = dfs.solveIterative(tree.root());
      expect(result).eql([1, 2, 4, 5, 3]);

    });


  });

});
