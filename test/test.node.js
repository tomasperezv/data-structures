var expect = require('expect.js');
require('../lib/node');

describe('Node', function(){

  describe('Creation and initialization', function() {

    it('Simple creation', function() {
      var node = new Node(5);
      expect(node.value()).to.be(5);
    });

    it('Can\'t initialize a node without a value', function() {

      expect(function() {
        var node = new Node();
      }).to.throwException();

    });

  });

  describe('Handling previous node', function() {

    it('Can assign a value to the previous node', function() {
      var nodeA = new Node(5);
      var nodeB = new Node(4);

      expect(nodeA.previous()).to.be(null);

      nodeA.setPrevious(nodeB);
      expect(nodeA.previous().value()).to.be(4);

    });

    it('Can\'t assign invalid values to the previous node', function() {

      var nodeA = new Node(5);
      expect(function() {
        nodeA.setPrevious(5);
      }).to.throwException();

    });

  });


  describe('Handling next node', function() {

    it('Can assign a value to the next node', function() {
      var nodeA = new Node(5);
      var nodeB = new Node(4);

      expect(nodeA.next()).to.be(null);

      nodeA.setNext(nodeB);
      expect(nodeA.next().value()).to.be(4);

    });

    it('Can\'t assign invalid values to the next node', function() {

      var nodeA = new Node(5);
      expect(function() {
        nodeA.setNext(5);
      }).to.throwException();

    });

  });

});
