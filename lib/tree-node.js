/*global InvalidParameter*/
require('./error/generic');
var Node = require('./node');

/**
 * @class TreeNode
 * @param {Object} value
 * @param {Array} child
 * @constructor
 * @throws InvalidParameter
 */
var TreeNode = function(value, children) {

  if (typeof children === 'undefined') {
    children = null;
  }

  Node.call(this, value);
  this._children = children;
};

TreeNode.prototype = new Node(0);

/**
 * @param {Array} children
 * @method setChildren
 * @public
 */
TreeNode.prototype.setChildren = function(children) {

  if (!(children instanceof Array)) {
    throw new TypeError('children should be an Array');
  }

  this._children = children;
};

/**
 * @param {Array|null} children
 * @method child
 * @public
 */
TreeNode.prototype.children = function() {
  return this._children;
};

/**
 * @method isLeaf
 * @return {Boolean}
 * @public
 */
TreeNode.prototype.isLeaf = function() {
  var isLeaf = true;
  if (this._children !== null) {
    for (var i = 0; i < this._children.length; i++) {
      if (this._children[i] !== null) {
        isLeaf = false;
        break;
      }
    }
  }
  return isLeaf;
};

module.exports = TreeNode;
