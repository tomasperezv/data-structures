var Algorithm = require('./algorithm/algorithm');

var PowerSet = function() {
  Algorithm.call(this);
};

PowerSet.prototype = new Algorithm();

PowerSet.prototype.solve = function(set) {
  var result = [];

  result.push([]);

  for (var i = 0; i < set.length; i++) {
    var current = set[i];
    var tmp = [];

    for (var j = 0; j < result.length; j++) {
      var subset = result[j].slice();
      subset.push(current);
      tmp.push(subset);
    }

    result = result.concat(tmp);

  }

  return result;
};

module.exports = PowerSet;

var a = new PowerSet();
console.log(a.solve([1, 2, 2]));
