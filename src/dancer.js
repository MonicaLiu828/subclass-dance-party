/* Refactor the Dancer class and its subclass BlinkyDancer from functional inheritance to pseudoclassical.

Feel free to refer to the slide decks on Functional Subclasses & Pseudoclassical Subclasses
 Make at least two new kinds of dancers. This will require creating a new factory function for each one (and making sure that your new JavaScript files are included in dancefloor.html).

Add a link in the top bar of dancefloor.html to create a dancer of each new type you create
Write tests for new types. Use spec/blinkyDancerSpec.js as a template for new test files, and make sure to include them in SpecRunner.html.*/
// Creates and returns a new dancer object that can step

var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

// // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// // this one sets the position to some random default point within the body
