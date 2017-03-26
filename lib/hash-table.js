const Node = require('./node');

/**
 * @class HashTable
 * @constructor
 */
const HashTable = function() {

  let i;

  // Number of buckets, must be a prime number to ease uniform distribution of the hash function.
  this._b = 101;
  this._table = [];

  // Defines what characters are supported for keys
  this._keyValidRegEx = /^[a-z]+$/i;

  // Number of characters supported: 26
  // It's used to compute the hash function, since a string key of length N constitutes a N digits S base number.
  this._s = 26;

  for (i = 0; i < this._b; i++) {
    this._table[i] = null;
  }

};

/**
 * Average case O(1)
 * Worst case O(n)
 *
 * @method get
 * @param {String} key
 * @return {?|null}
 * @public
 */
HashTable.prototype.get = function(key) {
  this.assertValidKey(key);

  let result = null;
  const pos = this._hash(key) % this._b;
  if (this._table[pos] !== null) {
    let current = this._table[pos];
    while (current !== null) {
      if (current.value()[0] === key) {
        result = current.value()[1];
        break;
      }
      current = current.next();
    }
  }

  return result;
};

/**
 * Average case O(1)
 * Worst case O(n)
 *
 * @method set
 * @param {String} key
 * @param {?} value
 * @throws TypeError
 * @public
 */
HashTable.prototype.set = function(key, value) {
  this.assertValidKey(key);

  const pos = this._hash(key) % this._b;
  const node = new Node([key, value]);

  if (this._table[pos] === null) {
    this._table[pos] = node;
  } else {
    let previous = null;
    let current = this._table[pos];
    while (current !== null) {
      if (current.value()[0] === key) {
        // The key is already set, update its value
        current.setValue([key, value]);
        break;
      }
      previous = current;
      current = current.next();
    }

    if (current === null) {
      // We couldn't find the key, then insert a new node
      previous.setNext(node);
    }

  }

};

/**
 * @method isValidKey
 * @param {String} key
 * @throws TypeError
 * @public
 */
HashTable.prototype.assertValidKey = function(key) {
  if (key.match(this._keyValidRegEx) === null) {
    throw new TypeError('Invalid characters detected in key ' + key + '. Only alpha characters supported.');
  }
};

/**
 * Returns the hash value corresponding to the key.
 *
 * @method _hash
 * @param {String} key
 * @return {Number} hash
 * @private
 */
HashTable.prototype._hash = function(key) {
  let i;
  let hashValue = 0;

  for (i = 0; i < key.length; i++) {
    hashValue += Math.pow(this._s, i) * (key.charCodeAt(i) - 'a'.charCodeAt(0));
  }

  return hashValue;
};

module.exports = HashTable;
