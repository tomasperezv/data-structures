const expect = require('expect.js');
const PowerSet = require('../lib/power-set');

describe('PowerSet', function(){
  it('Edge cases', function() {
    const powerSet = new PowerSet();

    let result = powerSet.solve([]);
    expect(Array.isArray(result)).to.be(true);
    expect(result.length).to.be(1);
    expect(result[0].length).to.be(0);

    result = powerSet.solve([1]);
    expect(result.length).to.be(2);
    expect(result[0].length).to.be(0);
    expect(result[1].length).to.be(1);
    expect(result[1][0]).to.be(1);
  });

  it('The number of results is correct', function() {
    const powerSet = new PowerSet();

    let result = powerSet.solve([1, 2]);
    expect(result.length).to.be(4);

    result = powerSet.solve([1, 2, 2]);
    expect(result.length).to.be(8);
  });

  it('The returned values are valid', function() {
    const powerSet = new PowerSet();

    let result = powerSet.solve([1, 2, 3]);
    let expected = [
      [],
      [1],
      [2],
      [1,2],
      [3],
      [1,3],
      [2,3],
      [1, 2,3],
    ];

    expected.forEach((testCase, pos) => {
      expect(testCase.length).to.be(expected[pos].length);
      testCase.forEach((e, index) => {
        expect(e).to.be(result[pos][index]);
      });
    });
  });
});
