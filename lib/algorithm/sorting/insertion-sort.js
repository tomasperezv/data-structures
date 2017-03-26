const Algorithm = require('../algorithm');

/**
 * @constructor
 */
const InsertionSort = function() {
  Algorithm.call(this);
};

InsertionSort.prototype = new Algorithm();

/**
 * @param {Array} a
 * @return {Array}
 */
InsertionSort.prototype.solve = function(a) {

  for (let i = 1; i < a.length; i++) {

    const value = a[i];

    let j = i-1;
    while(j >= 0 && a[j] > value) {
      a[j+1] = a[j];
      j--;
    }

    a[j+1] = value;

  }

  return a;

};

module.exports = InsertionSort;
