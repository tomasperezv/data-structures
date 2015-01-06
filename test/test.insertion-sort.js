/*global describe, it, InsertionSort*/
var expect = require('expect.js');
require('../lib/algorithm/sorting/insertion-sort');

describe('Insertion sort', function() {

  it('Trivial cases', function() {
    var insertionSort = new InsertionSort();
    expect(insertionSort.solve([])).to.eql([]);
    expect(insertionSort.solve([1])).to.eql([1]);
    expect(insertionSort.solve([1, 2, 3])).to.eql([1, 2, 3]);
  });

  it('Non trivial cases', function() {
    var insertionSort = new InsertionSort();
    expect(insertionSort.solve([1, 4, 8, 9, 11, 15, 7])).to.eql([1, 4, 7, 8, 9, 11, 15]);
  });

});
