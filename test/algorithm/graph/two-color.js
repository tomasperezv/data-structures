var expect = require('expect.js');
var TwoColor = require('../../../lib/algorithm/graph/two-color.js');

describe('Bipartition of a graph', function(){

  var twoColor = null;

  before(function() {
    twoColor = new TwoColor('red', 'yellow');
  });

  describe('Error handling', function() {

    it('Empty graph', function() {
      expect(twoColor.solve([])).eql(true);
      expect(twoColor.getColors()).eql([]);
    });

  });

  describe('Solve algorithm', function() {

    it('Two color: one vertex', function() {
      expect(twoColor.solve([[0]])).eql(true);
      expect(twoColor.getColors()).eql({0: 'red'});
    });

    it('Multiple nodes', function() {

      var adjacency = [
                        [0, 1, 1, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 1, 0]
                      ];

      expect(twoColor.solve(adjacency)).eql(true);
      expect(twoColor.getColors()).eql({0: 'red', 1: 'yellow', 2: 'yellow', 3: 'red'});

    });

    it('The graph can not be partitioned by 2 colors', function() {

      var adjacency = [
                    [0, 1, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 1, 0]
                  ];

      expect(twoColor.solve(adjacency)).eql(false);
      expect(twoColor.getColors()).eql({});

    });

  });

});
