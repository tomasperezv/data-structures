/*global describe, it*/
var expect = require('expect.js');
require('../../lib/list');
var SortedArrayToBST = require('../../lib/algorithm/string/largest-common-substring');

describe('LargestCommonSubstring', function(){

  describe('The algorithm works as expected', function() {
    it('Basic cases', function() {
      var largestCommonSubstring = new LargestCommonSubstring();
      expect(largestCommonSubstring.solve('ab', 'b')).to.be(1);
      expect(largestCommonSubstring.solve('', 'b')).to.be(0);
      expect(largestCommonSubstring.solve('abcdefg', 'cdefhz')).to.be(4);
    });
  });

});
