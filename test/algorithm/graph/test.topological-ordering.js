var expect = require('expect.js');
var TopologicalOrdering = require('../../../lib/algorithm/graph/topological-ordering.js');

describe('Topological sorting', function(){

  describe('Error handling', function() {

    it('Empty graph', function() {
      var topologicalOrdering = new TopologicalOrdering();
      expect(topologicalOrdering.solve([])).eql([]);
    });

  });

  describe('Solve algorithm', function() {

    it('Topological sorting: one vertex', function() {
      var topologicalOrdering = new TopologicalOrdering();
      var result = topologicalOrdering.solve([[0]]);
      expect(result).eql([0]);
    });

    it('Multiple nodes', function() {

      var adjacency = [
                      [0, 1, 1, 0],
                      [0, 0, 0, 1],
                      [0, 0, 0, 0],
                      [0, 0, 1, 0],
                      ];

      var topologicalOrdering = new TopologicalOrdering();
      var result = topologicalOrdering.solve(adjacency);
      expect(result).eql([0, 1, 3, 2]);
    });

  });

});
