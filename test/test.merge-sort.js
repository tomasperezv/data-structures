var expect = require('expect.js');
var MergeSort = require('../lib/algorithm/merge-sort');

describe('Merge sort', function() {

  it('Non trivial cases', function() {
    var mergeSort = new MergeSort();
    expect(mergeSort.solve([1, 4, 8, 9, 11, 15, 7])).to.eql([1, 4, 7, 8, 9, 11, 15]);
  });

});
