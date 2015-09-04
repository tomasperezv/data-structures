var expect = require('expect.js');
var sinon = require('sinon');
var FisherYates = require('../../lib/algorithm/fisher-yates');

describe('FisherYates', function(){

  describe('Solve algorithm', function() {

    it('Shuffle randomly an array', function() {

      var randomizer = new FisherYates();
      sinon.stub(randomizer, 'getRandomPos', function(min, max) {
        return max - 1;
      });

      var input = [1, 2, 3, 4];
      randomizer.solve(input);

      expect(input).eql([4, 1, 2, 3]);

      randomizer.getRandomPos.restore();
    });

  });

});
