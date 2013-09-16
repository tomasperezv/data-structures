
describe('Node', function(){

  describe('Creation and initialization', function() {

    it('Simple creation', function() {
      var node = new DS.Node(5);
      expect(node.getValue()).to.be(5);
    });

    it('Can\'t initialize a node without a value', function() {

      expect(function() {
        var node = new DS.Node();
      }).to.throwException();

    });

  });

  describe('Handling next node', function() {

    it('Can assign a value to the next node', function() {
      var nodeA = new DS.Node(5);
      var nodeB = new DS.Node(4);

      expect(nodeA.next()).to.be(null);

      nodeA.setNext(nodeB);
      expect(nodeA.next().getValue()).to.be(4);

    });

    it('Can\'t assign invalid values to the next node', function() {

      var nodeA = new DS.Node(5);
      expect(function() {
        nodeA.setNext(5);
      }).to.throwException();

    });

  });

});
