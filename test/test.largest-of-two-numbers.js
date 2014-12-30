/*global describe, it*/
var expect = require('expect.js');
require('../lib/list');
var LargestOfTwoNumbers = require('../lib/algorithm/largest-of-two-numbers');

describe('LargestOfTwoNumbers', function(){

  describe('The algorithm works as expected', function() {
    it('Basic cases', function() {
      var largestOfTwoNumbers = new LargestOfTwoNumbers();
      expect(largestOfTwoNumbers.solve(1, 2)).to.be(2);
      expect(largestOfTwoNumbers.solve(10, 2)).to.be(10);
    });
  });

});
