let scl = 14; // 10 looks good

let colors;

let circles = [];

let looping = true;

let gob;

function setup() {
  var c = createCanvas(800, 800);

  colors = [['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'], ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45']];
  //noLoop();
  resetSketch();
}

function resetSketch() {
  background(255);
  circles = [];
  for (let x = scl*6; x < width - scl*7; x += scl) {
    for (let y = scl*6; y < height - scl*7; y += scl) {
      for (let j = 0; j < 2; j += random(5)) {
        circles.push(new Circle(x, y));
      }
    }
  }
  gob = new Gob(width/2, height/2);
}

function draw() {
  background(255);
  for (let circle of circles) {
    circle.show();
    //circle.applyForce();
  }
  gob.show();
  gob.update();
  for (let circle of circles) {
    circle.applyForce();
  }

}

class Gob {
  constructor(x, y) {
    this.px = x;
    this.py = y;
    this.x = x;
    this.y = y;
    this.xoff = random(10000);
    this.yoff = random(20000);
    this.rad = randomGaussian(10, 5);
    this.move = p5.Vector.random2D();
  }

  show() {
    fill(0);
    ellipse(this.x, this.y, 50, 50);
  }

  update() {
    this.move.mult(1);
    this.x = this.move.x;
    this.y = this.move.y;
    this.move.x = map(noise(this.xoff),0,1, 0, width);
    this.move.y = map(noise(this.yoff), 0, 1, 0, height);
    this.xoff += .0095;
    this.yoff += .0095;
  }
}

class Circle {
  constructor(x, y) {
    this.px = x;
    this.py = y;
    this.x = x;
    this.y = y;
    this.col = colors[0][int(random(8))];
    this.x_effect = randomGaussian(10, 3);
    this.y_effect = randomGaussian(10, 3);
    this.rad = randomGaussian(10, 5);
    this.move = p5.Vector.random2D();
  }

  show() {
    noStroke();
    fill(this.col)
    ellipse(this.x + this.x_effect, this.y + this.y_effect, this.rad);
  }

  applyForce() {
    let dist = sqrt(pow((gob.x - this.x), 2) + pow((gob.y - this.y), 2));
    if (dist < 200) {
      this.move.mult(1);
      this.x += this.move.x;
      this.y += this.move.y;
    } else {
    let d1 = this.px - this.x;
    let d2 = this.py - this.y;

    let back = createVector((d1), (d2));
    if (sqrt(pow((d1), 2) + pow((d2), 2)) < 4) {
      back.setMag(.1);
    } else {
      back.setMag(2);
    }
    this.x += back.x;
    this.y += back.y;
  }

  }
}
