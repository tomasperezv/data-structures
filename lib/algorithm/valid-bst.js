const Algorithm = require('./algorithm');
/**
 * @constructor
 * @class ValidBST
 */
const ValidBST = function() {
  Algorithm.call(this);
};

ValidBST.prototype = new Algorithm();

/**
* @method _solve
* @param {BinaryTreeNode}  argument
* @param {Number} minValue
* @param {Number} maxValue
* @return return {Boolean}
* @private
*/
ValidBST.prototype._solve = function(root, minValue, maxValue) {

  if (root === null) {
    return true;
  }

  if (root.value() < minValue || root.value() > maxValue) {
    return false;
  } else {
    return this._solve(root.left(), minValue, root.value()) &&
        this._solve(root.right(), root.value(), maxValue);
  }

};

/**
* @method solve
* @param {BinarySearchTree} tree
* @return {Boolean}
* @public
*/
ValidBST.prototype.solve = function(tree) {
  return this._solve(tree.root(), Number.MAX_VALUE, Number.MIN_VALUE);
};

module.exports = ValidBST;
