/*global InvalidParameter*/
require('./error/generic');

/**
 * @class MinHeap
 * @constructor
 */
var MinHeap = function() {
  this.tree = [];
};

/**
 * @method _parentIndex
 * @param {Number} index
 * @return {Number}
 * @private
 */
MinHeap.prototype._parentIndex = function(index) {
  return Math.floor((index-1)/2);
};

/**
 * @method _rightChildIndex
 * @param {Number} index
 * @return {Number}
 * @public
 */
MinHeap.prototype._rightChildIndex  = function(index) {
  return 2*index+1;
};

/**
 * @method _leftChildIndex
 * @param {Number} index
 * @return {Number}
 * @public
 */
MinHeap.prototype._leftChildIndex = function(index) {
  return 2*index+2;
};

/**
 * @method _swap
 * @param {Number} i
 * @param {Number} j
 * @public
 */
MinHeap.prototype._swap = function(i, j) {
  var tmp = this.tree[i];
  this.tree[i] = this.tree[j];
  this.tree[j] = tmp;
};

/**
 * @method insert
 * @param {Number} value
 * @public
 */
MinHeap.prototype.insert = function(value) {
  this.tree.push(value);
  var currentIndex = this.tree.length-1;
  var parentIndex = this._parentIndex(currentIndex);
  while (currentIndex > 0 && this.tree[parentIndex] > this.tree[currentIndex]) {
    this._swap(parentIndex, currentIndex);
    currentIndex = parentIndex;
    parentIndex = this._parentIndex(currentIndex);
  }
};

/**
 * @method extract
 * @return {Number|null}
 * @public
 */
MinHeap.prototype.extract = function() {

  if (this.tree.length === 0) {
    return null;
  }

  var min = this.tree[0];
  var lastIndex = this.tree.length-1;
  this._swap(0, lastIndex);
  delete this.tree[lastIndex];
  this.tree.splice(lastIndex);
  this._minHeapify(0);
  return min;
};

/**
 * @method _minHeapify
 * @param {Number} i
 * @private
 */
MinHeap.prototype._minHeapify = function(i) {

  var left = this._leftChildIndex(i);
  var right = this._rightChildIndex(i);
  var min = this.tree[left] < this.tree[right] ? left : right;

  if (this.tree[min] < this.tree[i]) {
    this._swap(i, min);
    this._minHeapify(min);
  }

};

module.exports = MinHeap;
