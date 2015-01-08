var expect = require('expect.js');
var HashTable = require('../lib/hash-table');

describe('HashTable', function(){

  describe('The data structure works as expected', function() {

    it('Keys validation', function() {

      var hashTable = new HashTable();

      // Valid keys
      hashTable.assertValidKey('valid');
      hashTable.assertValidKey('validkey');

      // Invalid keys
      expect(function() {
        hashTable.assertValidKey('');
      }).to.throwException();

      expect(function() {
        hashTable.assertValidKey('.');
      }).to.throwException();

      expect(function() {
        hashTable.assertValidKey('invalid-key');
      }).to.throwException();

    });

    it('Insertion', function() {
      var hashTable = new HashTable();
      hashTable.set('keyisset', 1);
      expect(hashTable.get('keyisset')).to.be(1);
      expect(hashTable.get('Keyisset')).to.be(null);
      expect(hashTable.get('keyisnotset')).to.be(null);

      // Inserting a duplicated key overrides the original value
      hashTable.set('keyisset', 2);
      expect(hashTable.get('keyisset')).to.be(2);
    });

    it('Hash function', function() {
      var hashTable = new HashTable();
    });

  });

});
