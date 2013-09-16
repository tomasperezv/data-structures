// Initialize the namespace
var DS = DS || {};

// Namespace encapsulation for the Node data structure
DS.Exception = (function(namespace) {

  /**
   * @param String message
   */
  namespace.InvalidParameter = function(message) {
    this.message = message;
    this.name = 'InvalidParameter';
  };

  /**
   * @method toString
   * @return String
   */
  namespace.InvalidParameter.prototype.toString = function() {
    return this.name + ': ' + this.message;
  };

  return namespace;

})(DS.Exception || {});
