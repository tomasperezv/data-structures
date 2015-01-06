/**
 * @class QuickSort
 * @constructor
 */
var QuickSort = function() {
  Algorithm.call(this);
};

QuickSort.prototype = new Algorithm();

/**
 * @method _swap
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 * @private
 */
QuickSort.prototype._swap = function(a, i, j) {
  var tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
};

/**
 * @method _partition
 * @param {String} a
 * @param {Number} left
 * @param {Number} right
 * @param {Number} pivot
 * @return {Array}
 * @private
 */
QuickSort.prototype._partition = function(a, left, right, pivot) {

  var i;
  var j = left;
  var pivotValue = a[pivot];
  this._swap(a, pivot, right);

  for (i = left; i < right; i++) {
    if (a[i] < pivotValue) {
      this._swap(a, i, j);
      j++;
    }
  }

  this._swap(a, right, j);

  return j;

};

/**
 * @method solve
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 * @return {Array)
 * @public
 */
QuickSort.prototype.solve = function(a, left, right) {

  if (a.length <= 1) {
    return a;
  }

  if (left > right) {
    return [];
  }

  if (typeof left === 'undefined') {
    left = 0;
  }

  if (typeof right === 'undefined') {
    right = a.length - 1;
  }

  var pivot = Math.floor((left + right)/2);
  var pivotPos = this._partition(a, left, right, pivot);

  this.solve(a, left, pivotPos-1);
  this.solve(a, pivotPos+1, right);

  return a;

};

module.exports = QuickSort;
