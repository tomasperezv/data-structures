/**
 * @class MinHeap
 * @constructor
 */
const MinHeap = function() {
  this.tree = [];
};

/**
 * O(1)
 * 
 * @method _parentIndex
 * @param {Number} index
 * @return {Number}
 * @private
 */
MinHeap.prototype._parentIndex = function(index) {
  return Math.floor((index-1)/2);
};

/**
 * O(1)
 *
 * @method _rightChildIndex
 * @param {Number} index
 * @return {Number}
 * @public
 */
MinHeap.prototype._rightChildIndex  = function(index) {
  return 2*index+1;
};

/**
 * O(1)
 *
 * @method _leftChildIndex
 * @param {Number} index
 * @return {Number}
 * @public
 */
MinHeap.prototype._leftChildIndex = function(index) {
  return 2*index+2;
};

/**
 * O(1)
 *
 * @method _swap
 * @param {Number} i
 * @param {Number} j
 * @public
 */
MinHeap.prototype._swap = function(i, j) {
  const tmp = this.tree[i];
  this.tree[i] = this.tree[j];
  this.tree[j] = tmp;
};

/**
 * O(log n)
 *
 * @method insert
 * @param {Number} value
 * @public
 */
MinHeap.prototype.insert = function(value) {
  this.tree.push(value);
  let currentIndex = this.tree.length-1;
  let parentIndex = this._parentIndex(currentIndex);
  while (currentIndex > 0 && this.tree[parentIndex] > this.tree[currentIndex]) {
    this._swap(parentIndex, currentIndex);
    currentIndex = parentIndex;
    parentIndex = this._parentIndex(currentIndex);
  }
};

/**
 * O(log n)
 *
 * @method extract
 * @return {Number|null}
 * @public
 */
MinHeap.prototype.extract = function() {

  if (this.tree.length === 0) {
    return null;
  }

  const min = this.tree[0];
  const lastIndex = this.tree.length-1;
  this._swap(0, lastIndex);
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

  const left = this._leftChildIndex(i);
  const right = this._rightChildIndex(i);
  const min = this.tree[left] < this.tree[right] ? left : right;

  if (this.tree[min] < this.tree[i]) {
    this._swap(i, min);
    this._minHeapify(min);
  }

};

module.exports = MinHeap;
