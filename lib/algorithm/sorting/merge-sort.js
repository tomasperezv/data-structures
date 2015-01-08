var Algorithm = require('../algorithm');

var MergeSort = function() {
  Algorithm.call(this);
};

MergeSort.prototype = new Algorithm();

/**
 * @param {Array} left
 * @param {Array} right
 * @return {Array}
 * @method merge
 * @public
 */
MergeSort.prototype.merge = function(left, right) {

  var result = [];

  while (left.length > 0 || right.length > 0) {
    if (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length > 0) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result;

};

/**
 * @param {Array} a
 * @return {Array}
 * @method solve
 * @public
 */
MergeSort.prototype.solve = function(a) {

  if (a.length <= 1) {
    return a;
  }

  var m = a.length / 2;
  var left = a.slice(0, m);
  var right = a.slice(m);

  left = this.solve(left);
  right = this.solve(right);
  return this.merge(left, right);

};

module.exports = MergeSort;
