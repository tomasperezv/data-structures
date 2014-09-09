/*global expect, require, describe, it, Dijkstra*/

var expect = require('expect.js');
var Dijkstra = require('../lib/algorithm/dijkstra.js');

describe('Dijkstra', function(){

  describe('Error handling', function() {

    it('Empty graph', function() {
      var dijkstraAlgorithm = new Dijkstra();
      expect(function() {
        dijkstraAlgorithm.solve([]);
      }).to.throwException();
    });

  });

  describe('Solve algorithm', function() {

    it('Single source path search: one vertex', function() {
      var dijkstraAlgorithm = new Dijkstra();
      var result = dijkstraAlgorithm.solve([[0]]);
      expect(result).eql([0]);
    });

    it('Single source path search: multiple nodes', function() {

      var inf = Number.POSITIVE_INFINITY;

      var adjacency = [
                      [0, 2, 1, inf, inf],
                      [inf, 0, 1, inf, inf],
                      [inf, inf, 0, 8, 2],
                      [3, inf, inf, 0, inf],
                      [inf, inf, inf, 3, 0]
                      ];

      var dijkstraAlgorithm = new Dijkstra();
      var result = dijkstraAlgorithm.solve(adjacency, 2);
      expect(result).eql([8, 10, 0, 5, 2]);
    });

  });

});
