var expect = require('expect.js');
var DoubleLinkedList = require('../lib/double-linked-list');
var Node = require('../lib/node');

describe('DoubleLinkedList', function(){

  describe('Insertion', function() {

    it('Simple insertion', function() {
      var list = new DoubleLinkedList();
      list.insert(new Node(5));
      expect(list.get(0)).to.be(5);
    });

    it('Can\'t insert an invalid a value', function() {

      expect(function() {
        var list = new DoubleLinkedList();
        list.insert(5);
      }).to.throwException();

    });


    it('Can insert multiples values', function() {

      var i;
      var values = [1, 2, 3, 4, 5];

      var list = new DoubleLinkedList();
      for (i = 0; i < values.length; i++) {
        list.insert(new Node(values[i]));
      }

      for (i = 0; i < values.length; i++) {
        expect(list.get(i)).to.be(values[i]);
      }

    });

  });

});
