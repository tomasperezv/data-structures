/*global Algorithm, InvalidParameter, Node*/
require('./error/generic');
var NodeTree = require('../lib/node-tree');

/**
 * @class Tree
 * @param NodeTree root
 * @constructor
 * @throws InvalidParameter
 */
var Tree = function(root) {

  if (typeof root !== 'undefined' && !(root instanceof NodeTree)) {
    throw new TypeError('Root value must be a NodeTree.');
  }

  if (typeof root === 'undefined') {
    root = null;
  }

  this._root = root;

};

/**
 * @method getRoot
 * @public
 * @return {NodeTree}
 */
Tree.prototype.getRoot = function() {
  return this._root;
};

module.exports = Tree;
