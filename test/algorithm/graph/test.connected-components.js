var expect = require('expect.js');
var ConnectedComponents = require('../../../lib/algorithm/graph/connected-components.js');

describe('Connected components', function(){

  describe('Error handling', function() {

    it('Empty graph', function() {
      var connectedComponents = new ConnectedComponents();
      expect(connectedComponents.solve([])).eql([]);
    });

  });

  describe('Solve algorithm', function() {

    it('Connected components: one vertex', function() {
      var connectedComponents = new ConnectedComponents();
      var result = connectedComponents.solve([[0]]);
      expect(result).eql([[0]]);
    });

    it('Multiple nodes', function() {

      var adjacency = [
                        [0, 1, 1, 0],
                        [0, 0, 0, 0],
                        [1, 0, 0, 0],
                        [0, 0, 0, 0]
                      ];

      var connectedComponents = new ConnectedComponents();
      var result = connectedComponents.solve(adjacency);
      expect(result).eql([[0, 1, 2], [3]]);

      adjacency = [
                    [0, 1, 1, 0],
                    [0, 0, 0, 0],
                    [1, 0, 0, 1],
                    [0, 0, 0, 0]
                  ];

      result = connectedComponents.solve(adjacency);
      expect(result).eql([[0, 1, 2, 3]]);

      adjacency = [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                  ];

      result = connectedComponents.solve(adjacency);
      expect(result).eql([[0], [1], [2], [3]]);

    });

  });

});
