var TreeNode = require('../lib/tree-node');

/**
 * @class Tree
 * @param {NodeTree} root
 * @constructor
 * @throws TypeError
 */
var Tree = function(root) {

  if (typeof root !== 'undefined' && !(root instanceof TreeNode)) {
    throw new TypeError('Root value must be a TreeNode.');
  }

  if (typeof root === 'undefined') {
    root = null;
  }

  this._root = root;

};

/**
 * @method getRoot
 * @public
 * @return {TreeNode}
 */
Tree.prototype.root = function() {
  return this._root;
};

module.exports = Tree;
