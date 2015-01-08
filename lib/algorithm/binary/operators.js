/*global Algorithm*/

/**
 * @author Tomas Perez <tom@0x101.com>
 */

var Algorithm = require('../algorithm');

var BinaryOperator = function() {
  Algorithm.call(this);
};

BinaryOperator.prototype = new Algorithm();

/**
 * Returns as a boolean the bit at the position i.
 *
 * e.g. 
 *  BinaryOperator.getBit(8, 1) => false
 *  BinaryOperator.getBit(8, 2) => false
 *  BinaryOperator.getBit(8, 3) => false
 *  BinaryOperator.getBit(8, 4) => true
 *
 * @method getBit
 * @param {Number} number
 * @param {Number} i
 * @return {Boolean}
 * @public
 */
BinaryOperator.prototype.getBit = function(number, i) {
  return ((1 << i-1) & number) !== 0;
};

/**
 * Sets to 1 the bit at position i.
 *
 * e.g.
 *  BinaryOperator.setBit(8, 1) => 9
 *
 * @method setBit
 * @param {Number} number
 * @param {Number} i
 * @return {Number}
 * @public
 */
BinaryOperator.prototype.setBit = function(number, i) {
  return (1 << i-1) | number;
};

/**
 * Sets to 0 the bit at position i.
 *
 * e.g.
 *  BinaryOperator.clearBit(8, 4) => 0
 *
 * @method clearBit
 * @param {Number} number
 * @param {Number} i
 * @return {Number}
 * @public
 */
BinaryOperator.prototype.clearBit = function(number, i) {
  return ~(1 << i-1) & number;
};

/**
 * @method sign
 * @param {Number} number
 * @return {Number} 1 if the sign is positive, 0 otherwise.
 * @public
 */
BinaryOperator.prototype.sign = function(number) {
  return this.flip((number >> 31) & 0x1);
};

/**
 * @method flip
 * @param {Number} number
 * @return {Number}
 * @public
 */
BinaryOperator.prototype.flip = function(number) {
  return number ^ 1;
};

module.exports = BinaryOperator;
