/*global describe, it*/
var expect = require('expect.js');
var List = require('../lib/list');
var Node = require('../lib/node');

describe('List', function(){


  describe('isEmpty', function() {

    it('Checking if a list is empty', function() {
      var list = new List();
      expect(list.isEmpty()).to.be(true);
      list.insert(0, new Node(5));
      expect(list.isEmpty()).to.be(false);
    });

  });

  describe('Insertion', function() {

    it('Simple insertion', function() {
      var list = new List();
      list.insert(0, new Node(5));
      expect(list.get(0)).to.be(5);
    });

    it('Can\'t insert an invalid a value', function() {

      expect(function() {
        var list = new List();
        list.insert(0, 5);
      }).to.throwException();

    });


    it('Can insert multiples values', function() {

      var values = [1, 2, 3, 4, 5];

      var list = new List();
      for (var i = 0; i < values.length; i++) {
        list.insert(i, new Node(values[i]));
      }

      for (var i = 0; i < values.length; i++) {
        expect(list.get(i)).to.be(values[i]);
      }


    });

  });

});
