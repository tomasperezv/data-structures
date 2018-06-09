/**
 * Implementation of the Dutch flag algorithm
 *
 * @author Tomas Perez <t@0x101.com>
 */

const Algorithm = require('./algorithm');

const DutchFlag = function() {
}

DutchFlag.prototype = new Algorithm();

/**
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
DutchFlag.prototype.swap = function(a, i, j) {
  const tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
};

/**
 * @param {Array} a
 * @method solve
 */
DutchFlag.prototype.solve = function(a) {
  if (typeof a === 'undefined') {
    return [];
  }

  let i = 0;
  let firstLimit = 0;
  let secondLimit = a.length - 1;

  while (i <= secondLimit) {
    if (a[i] === -1) {
      this.swap(a, i, firstLimit);
      i++;
      firstLimit++;
    } else if (a[i] === 0) {
      i++;
    } else {
      this.swap(a, i, secondLimit);
      secondLimit--;
    }
  }

  return a;
};

module.exports = DutchFlag;
