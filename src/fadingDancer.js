
var MakeFadingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="fadingDancer"></span>');
  this.setPosition(top, left);
};
MakeFadingDancer.prototype = Object.create(makeDancer.prototype);
MakeFadingDancer.prototype.constructor = MakeFadingDancer;

var oldStep = MakeFadingDancer.prototype.step;
MakeFadingDancer.prototype.step = function() {
  oldStep.bind(this)();
  this.$node.fadeIn('slow');
  this.$node.fadeOut('slow');
};