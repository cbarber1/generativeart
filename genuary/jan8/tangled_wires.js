var inc = 0.005;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

let looping = false;
let colors;

function setup() {
  createCanvas(2000, 2000);
  colorMode(HSB, 255);
  colors = ['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 100; i++) {
    particles[i] = new Particle();
  }
  background(255);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    zoff += 0.0003; //.0003 looks good
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}

function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 40; // 10 normal
  this.color = random(colors);

  this.prevPos = this.pos.copy();
  this.r = 20;
  this.grow = true;

  this.first = true;
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  };

  this.applyForce = function(force) {
    this.acc.add(force);
  };

  this.show = function() {
    //stroke(color(this.color));
    stroke(0);
    //noStroke();
    strokeWeight(5);
    fill(color(this.color));
    //let d = dist(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    //this.r = 20;
    //line(this.pos.x - (this.r / 3), this.pos.y - this.r / 3, this.prevPos.x - this.r / 3, this.prevPos.y - this.r / 3);
      //ellipse(this.pos.x, this.pos.y, this.r, this.r);
    ellipse(this.pos.x, this.pos.y, this.r );
  // }
    if (this.r > 40) {
      this.grow = false;
    } else if (this.r < 1) {
      this.grow = true;
    }
    if (this.grow) {
      this.r += .2;
    }
    else {
      this.r -= .2;
    }
    this.updatePrev();
  };

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;

  };

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  };
}
