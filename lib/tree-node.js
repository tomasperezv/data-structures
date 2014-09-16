/*global InvalidParameter, Node*/
require('./error/generic');
require('./node');

/**
 * @class TreeNode
 * @param Object value
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

module.exports = TreeNode;
