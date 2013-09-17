
describe('DS.List', function(){

  describe('Insertion', function() {

    it('Simple insertion', function() {
      var list = new DS.List();
      list.insert(new DS.Node(5));
      expect(list.get(0)).to.be(5);
    });

    it('Can\'t insert an invalid a value', function() {

      expect(function() {
        var list = new DS.List();
        list.insert(5);
      }).to.throwException();

    });


    it('Can insert multiples values', function() {

      var values = [1, 2, 3, 4, 5];

      var list = new DS.List();
      for (var i = 0; i < values.length; i++) {
        list.insert(new DS.Node(values[i]));
      }

      for (var i = 0; i < values.length; i++) {
        expect(list.get(i)).to.be(values[i]);
      }


    });

  });

});
