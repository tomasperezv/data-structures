const DutchFlag = require('../../lib/algorithm/dutch-flag');
const expect = require('expect.js');

describe('DutchFlag', function(){
  describe('Solve algorithm', function() {
    it('DutchFlag corner cases', function() {
      const dutchFlag = new DutchFlag();

      expect(dutchFlag.solve()).eql([]);
      expect(dutchFlag.solve([])).eql([]);
      expect(dutchFlag.solve([1])).eql([1]);
      expect(dutchFlag.solve([-1])).eql([-1]);
      expect(dutchFlag.solve([0])).eql([0]);
    });

    it('DutchFlag simple sorting', function() {
      const dutchFlag = new DutchFlag();

      expect(dutchFlag.solve([-1, 0, 1, -1, 0])).eql([-1, -1, 0, 0, 1]);
      expect(dutchFlag.solve([-1, -1, 0, 0, 1])).eql([-1, -1, 0, 0, 1]);
      expect(dutchFlag.solve([0, 0, 1, -1, -1])).eql([-1, -1, 0, 0, 1]);
      expect(dutchFlag.solve([1, -1, -1, 0, 0])).eql([-1, -1, 0, 0, 1]);
    });
  });
});
