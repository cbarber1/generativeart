let looping = false;
let colors;

const trees = [];

let variation = 100;

function setup() {
  createCanvas(800, 600);
  colors = [['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'], ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45']];

  colorMode(HSB);
  background(180, 50, 50);
  noiseDetail(20);
  fill(120, 50, 50);
  stroke(0);
  beginShape();
  vertex(0, random(200, 300));
  let yoff = 0;
  for (let i = 0; i < width; i+=1) {
    vertex(i, map(noise(yoff), 0, 1, 200, 300));
    yoff += .004;
  }
  vertex(width, random(200, 300));
  vertex(width, height);
  vertex(0, height);
  endShape();
  fill(120, 40, 50);
  beginShape();
  vertex(0, random(400, 500));
  let xoff = 100;
  for (let i = 0; i < width; i+=1) {
    vertex(i, map(noise(xoff), 0, 1, 400, 500));
    xoff += .008;
  }
  vertex(width, random(200, 300));
  vertex(width, height);
  vertex(0, height);
  endShape();

  for (let i = 0; i < 10; i++) {
    trees.push(new Tree());
  }

  for (let tree of trees) {
    tree.show();
  }
  for (let tree of trees) {
    tree.leaves();
  }
}

class Tree {
  constructor() {
    this.trunk = random(20, 30);
    this.leave = random(80, 100);
    this.trunk_color = '#9c6853'
    this.leave_color = colors[0][int(random(7))];
    this.x = random(0, width);
    this.y = random(200, 500);
  }

  show() {
    let height = random(100, 150);
    let small = random(2, 4);
    fill(this.trunk_color);
    beginShape();
    vertex(this.x + small, this.y);
    vertex(this.x, this.y + height);
    vertex(this.x + this.trunk, this.y + height);
    vertex(this.x + this.trunk - small, this.y);
    endShape();
    for (let i = 0; i < 100; i++) {
      stroke(0);
      strokeWeight(1);
      point(this.x + random(this.trunk - small), this.y + random(height));
    }
    strokeWeight(1);
    //rect(x, y, this.trunk, random(30, 60));
    strokeWeight(10);
    point(this.x, this.y);
    strokeWeight(1);
  }

  leaves() {
    deformed_circle(this.x + this.trunk / 2, this.y, this.leave, this.leave_color);
  }
}

function deformed_circle(x, y, r, leave_color) {
  push();
  translate(x, y);

  let points = [];
  for (let i = 0; i < TWO_PI; i += .15) {
    let p = createVector(r/2*sin(i), r/2*cos(i));
    append(points, p);
  }

  // Create deformed_circle
  let final = [];
  for (p in points) {
    let x_change = points[p].x / variation; // 55 normally
    let y_change = points[p].y / variation;

    let change = random(-3, 3);
    let new_p = createVector(points[p].x + x_change * change, points[p].y + y_change * change);
    append(final, new_p);
  }
  console.log(points);
  console.log(final);

  // Create outline and shape
  fill(color(leave_color));
  strokeWeight(1);
  beginShape();
  for (p in final) {
    curveVertex(final[p].x, final[p].y);
  }
  curveVertex(final[0].x, final[0].y);
  curveVertex(final[1].x, final[1].y);
  curveVertex(final[2].x, final[2].y);
  endShape();

  pop();
}
