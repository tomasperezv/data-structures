var expect = require('expect.js');
var BinaryOperator = require('../../../lib/algorithm/binary/operators.js');

describe('BinaryOperator', function(){

  var testBinaryOperator = function(method, params, expected) {

    var result = [];

    params.map(function(currentParams) {
      result.push(method.apply(null, currentParams));
    });

    expect(result).eql(expected);

  };

  describe('getBit', function() {

    it('Returning bits', function() {
      var params = [[8, 1], [8, 2], [8, 3], [8, 4], [8, 5]];
      var expected = [false, false, false, true, false];
      var binaryOperator = new BinaryOperator();
      testBinaryOperator(binaryOperator.getBit, params, expected);
    });

  });

  describe('setBit', function() {

    it('Setting bits', function() {
      var params = [[8, 1], [8, 2], [8, 3], [8, 4], [8, 5]];
      var expected = [9, 10, 12, 8, 24];
      var binaryOperator = new BinaryOperator();
      testBinaryOperator(binaryOperator.setBit, params, expected);
    });

  });

  describe('clearBit', function() {

    it('Clearing bits', function() {
      var params = [[8, 1], [8, 2], [8, 3], [8, 4], [8, 5]];
      var expected = [8, 8, 8, 0, 8];
      var binaryOperator = new BinaryOperator();
      testBinaryOperator(binaryOperator.clearBit, params, expected);
    });

  });

});
