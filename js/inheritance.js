/**
 * Makes Subclass constructor a subclass of Superclass constructor
 * @param {Function} Subclass
 * @param {Function} Superclass
 * @return undefined
 */
window.inheritPrototype = function (Subclass, Superclass) {
  // set Subclass's prototype to a copy of Superclass's prototype
  Subclass.prototype = Object.create(Superclass.prototype);

  // set the constructor property to Subclass (otherwise it will be Superclass)
  Subclass.prototype.constructor = Subclass;
};
