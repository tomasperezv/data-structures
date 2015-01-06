/*global describe, it*/
var expect = require('expect.js');
require('../../lib/list');
var SortedArrayToBST = require('../../lib/algorithm/sorted-array-to-bst');

describe('SortedArrayToBST', function(){

  describe('The algorithm works as expected', function() {

    it('Basic cases', function() {
      var A = [1, 2, 3, 4, 5, 6];
      var sortedArrayToBST = new SortedArrayToBST();
      var root = sortedArrayToBST.solve(A);
      expect(root.value()).to.be(3);
      expect(root.left().value()).to.be(1);
      expect(root.right().value()).to.be(5);
    });

    it('Edge cases', function() {
      var A = [];
      var sortedArrayToBST = new SortedArrayToBST();
      expect(sortedArrayToBST.solve([])).to.be(null);
      expect(sortedArrayToBST.solve([1]).value()).to.be(1);
    });

  });

});
