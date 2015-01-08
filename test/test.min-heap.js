var expect = require('expect.js');
var MinHeap = require('../lib/min-heap');

describe('MinHeap', function(){

  describe('The data structure works as expected', function() {
    it('Basic cases', function() {
      var minHeap = new MinHeap();
      minHeap.insert(1);
      minHeap.insert(2);
      minHeap.insert(-1);
      minHeap.insert(10);
      minHeap.insert(4);
      expect(minHeap.extract()).to.be(-1);
      expect(minHeap.extract()).to.be(1);
      expect(minHeap.extract()).to.be(2);
      expect(minHeap.extract()).to.be(4);
      expect(minHeap.extract()).to.be(10);
      expect(minHeap.extract()).to.be(null);
    });
  });

});
