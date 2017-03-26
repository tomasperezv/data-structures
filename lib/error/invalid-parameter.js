/**
 * @constructor
 * @param String message
 * @class InvalidParameter
 */
const InvalidParameter = function(message) {
  this.message = message;
  this.name = 'InvalidParameter';
};

/**
 * @method toString
 * @return String
 */
InvalidParameter.prototype.toString = function() {
  return this.name + ': ' + this.message;
};

module.exports = InvalidParameter;
