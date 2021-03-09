let scl = 50; // 10 looks good

let colors;

let circles = [];

let seed;

let looping = false;

function setup() {
  createCanvas(4000, 4000);

  seed = int(random(100000));
  randomSeed(seed);
  strokeWeight(2);
  colors = [['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'], ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45']];
  background(255);
  for (let x = 400; x < width - 400; x += scl) {
    for (let y = 400; y < height - 400; y += scl) {
      for (let j = 0; j < 2; j += random(10)) {
        //stroke(0, 50)
        // noStroke();
        // fill(colors[0][int(random(8))])
        // ellipse(x + randomGaussian(10, 3), y + randomGaussian(10, 3), randomGaussian(10, 5));
        circles.push(new Circle(x, y));
      }
    }
  }
  noLoop();
}

function draw() {
  background(255);
  for (let circle of circles) {
    circle.show();
    //circle.applyForce();
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
    this.rad = randomGaussian(40, 30); // normally 10
    this.move = p5.Vector.random2D();
  }

  show() {
    //noStroke();
    fill(this.col)
    ellipse(this.x + this.x_effect, this.y + this.y_effect, this.rad);
  }

  applyForce() {
    let dist = sqrt(pow((mouseX - this.x), 2) + pow((mouseY - this.y), 2));
    if (dist < 100) {
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
