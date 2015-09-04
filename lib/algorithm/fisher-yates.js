var Algorithm = require('./algorithm');

/**
 * The Fisher Yates algorithm shuffles randomly a given array.
 * @constructor
 * @class FisherYates
 */
var FisherYates = function() {
  Algorithm.call(this);
};

FisherYates.prototype = new Algorithm();

/**
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @method getRandomPos
 * @public
 */
FisherYates.prototype.getRandomPos = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * @method _swap
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
FisherYates.prototype._swap = function(a, i, j) {
  var tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
};

/**
 * @param {Array} a
 * @method solve
 * @public
 */
FisherYates.prototype.solve = function(a) {
  for (var i = 0; i < a.length; i++) {
    var randomPos = this.getRandomPos(i, a.length);
    this._swap(a, i, randomPos);
  }
};

module.exports = FisherYates;
