const Algorithm = require('./algorithm');

const TwoSum = function() {
  Algorithm.call(this);
};

TwoSum.prototype = new Algorithm();

/**
 * @param {Array} numbers
 * @param {Number} target
 * @return {Array|null}
 * @method solve
 */
TwoSum.prototype.solve = function(numbers, target) {

  let result = null;
  let i;
  const sumMap = {};

  for (i = 0; i < numbers.length; i++) {
    var currentNumber = numbers[i];
    var diff = target - currentNumber;
    if (typeof sumMap[diff] !== 'undefined') {
      result = [sumMap[diff], i];
      break;
    } else {
      sumMap[currentNumber] = i;
    }
  }

  return result;

};

/**
 * @param {Array} numbers
 * @param {Number} target
 * @return {Array|null}
 * @method solve
 */
TwoSum.prototype.solveImproved = function(numbers, target) {

  let i = 0,
      j = numbers.length-1,
      result = null;

  numbers = numbers.sort(function(a, b) {
    return a-b;
  });

  while (i < j) {
    var sum = numbers[i] + numbers[j];
    if (sum === target) {
      result = [i, j];
      break;
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }

  return result;

};

module.exports = TwoSum;
