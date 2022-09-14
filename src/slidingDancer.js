
var SlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="slidingDancer"></span>');
  this.setPosition(top, left);
};
SlidingDancer.prototype = Object.create(makeDancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;

var oldStep = SlidingDancer.prototype.step;
SlidingDancer.prototype.step = function() {
  oldStep.bind(this)();

  this.$node.animate({left: "250px"});
  this.$node.animate({top: "250px" });
};