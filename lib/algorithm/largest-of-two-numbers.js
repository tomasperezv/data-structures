const Algorithm = require('./algorithm');
const BinaryOperator = require('./binary/operators.js');

const LargestOfTwoNumbers = function() {
  Algorithm.call(this);
};

LargestOfTwoNumbers.prototype = new Algorithm();

/**
 * Return the largest of two numbers without using comparissions.
 *
 * Given a and b, it can be computed since largest = a*k + b*q, where
 * k is 1 if a-b > 0, 0 otherwise. q is flip(k)
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @method solve
 */
LargestOfTwoNumbers.prototype.solve = function(a, b) {
  const binaryOperator = new BinaryOperator();
  const k = binaryOperator.sign(a-b);
  const q = binaryOperator.flip(k);
  return (a*k + b*q);
};

module.exports = LargestOfTwoNumbers;
