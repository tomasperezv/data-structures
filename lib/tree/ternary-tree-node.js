/**
 * @constructor
 * @param {String} value
 * @param {Boolean} isWord
 * @class TernaryTreeNode
 */
var TernaryTreeNode = function(value, isWord) {
  this._value = value || '';
  this._isWord = isWord || false;
  this._left = null;
  this._right = null;
  this._center = null;
};

module.exports = TernaryTreeNode;
