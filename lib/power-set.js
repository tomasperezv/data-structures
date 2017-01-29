var Algorithm = require('./algorithm/algorithm');

var PowerSet = function() {
  Algorithm.call(this);
};

PowerSet.prototype = new Algorithm();

PowerSet.prototype.solve = function(set) {
  const n = Math.pow(2, set.length);
  const result = [];

  for (let i = 0; i < n; i++) {
    let current = [];
    for (let j = 0; j < set.length; j++) {
      if (i & (1 << j)) {
        current.push(set[j]);
      }
    }

    result.push(current);
  }
  return result;
};

module.exports = PowerSet;
