var expect = require('expect.js');
var Prim = require('../../../lib/algorithm/graph/prim');

describe('Prim minimum spanning tree', function(){

  describe('Error handling', function() {

    it('Empty graph', function() {
      var prim = new Prim();
      expect(prim.solve([])).eql([0]);
    });

  });

  describe('Solve algorithm', function() {

    it('One vertex', function() {
      var prim = new Prim();
      expect(prim.solve([0])).eql([0]);
    });

    it('Multiple nodes', function() {

      var adjacency = [
                        [0, 5, 2, 4, 0],
                        [5, 0, 2, 0, 0],
                        [2, 2, 0, 3, 7],
                        [4, 0, 3, 0, 4],
                        [0, 0, 7, 4, 0]
                      ];

      var prim = new Prim();
      expect(prim.solve(adjacency)).eql([0, 2, 2, 3, 4]);
    });

  });

});
