/*global describe, it*/
var expect = require('expect.js');
var QuickSort = require('../lib/algorithm/quicksort');

describe('Quick sort', function() {

  it('Partition method', function() {
    var quickSort = new QuickSort();
    var a = [1, 4, 8, 9, 11, 15, 7];
    quickSort._partition(a, 0, 6, 3);
    expect(a).to.eql([1, 4, 8, 7, 9, 15, 11]);
  });

  it('Already sorted array', function() {
    var quickSort = new QuickSort();
    expect(quickSort.solve([1, 2, 3, 4])).to.eql([1, 2, 3, 4]);
  });

  it('Non trivial cases', function() {
    var quickSort = new QuickSort();
    expect(quickSort.solve([1, 4, 8, 9, 11, 15, 7])).to.eql([1, 4, 7, 8, 9, 11, 15]);
    expect(quickSort.solve([1, 8, 4, 2])).to.eql([1, 2, 4, 8]);
  });

});
