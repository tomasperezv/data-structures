var expect = require('expect.js');
var TwoSum = require('../../lib/algorithm/two-sum.js');

describe('Two Sum', function(){

  it('Basic tests', function() {

    var basicTest = function(twoSumFunction) {
      var result = twoSumFunction([1,3,5,6], 9);
      expect(result).eql([1, 3]);

      result = twoSumFunction([1,3,5,6], 10);
      expect(result).eql(null);
    };

    describe('Solve algorithm', function() {
      var twoSum = new TwoSum();
      basicTest(twoSum.solve);
    });

    describe('Improved two-sum', function() {
      var twoSum = new TwoSum();
      basicTest(twoSum.solveImproved);
    });

  });

});
