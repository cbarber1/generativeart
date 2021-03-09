let x = [400, 400];
let y = [3600, 400];
let z = [3600, 3600];
let w = [400, 3600]

let looping = false;

let colors;

let seed;

function setup() {
  createCanvas(4000, 4000);
  seed = int(random(10000));
  randomSeed(seed);
  colors = ['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];
  background(255);
  subdivision(x, y, z, 1, 26);
  subdivision(x, w, z, 1, 26);
}

function subdivision(a, b, c, lvl, max) {
  if (lvl >= max) {
    return;
  }
  strokeWeight(0.5);
  //fill(random(colors));
  triangle(a[0], a[1], b[0], b[1], c[0], c[1]);
  // let pick = random(1);
  // if (pick <= 0.3) {
  //   let temp = [];
  //   temp[0] = (b[0] + c[0])/2;
  //   temp[1] = (b[1] + c[1])/2;
  //   subdivision(a, b, temp, lvl + random(3), max);
  //   subdivision(a, c, temp, lvl + random(3), max);
  // } else if (pick > 0.3 && pick < 0.6) {
  //   let temp = [];
  //   temp[0] = (a[0] + c[0])/2;
  //   temp[1] = (a[1] + c[1])/2;
  //   subdivision(b, c, temp, lvl + random(3), max);
  //   subdivision(b, a, temp, lvl + random(3), max);
  // } else {
  //   let temp = [];
  //   temp[0] = (a[0] + b[0])/2;
  //   temp[1] = (a[1] + b[1])/2;
  //   subdivision(c, a, temp, lvl + random(3), max);
  //   subdivision(c, b, temp, lvl + random(3), max);
  // }
  let d1 = dist(a[0], a[1], b[0], b[1]);
  let d2 = dist(a[0], a[1], c[0], c[1]);
  let d3 = dist(c[0], c[1], b[0], b[1]);

  let vary = random(1.5, 3);
  if (d1 > d2 && d1 > d3) {
      let temp = [];
      let vector = createVector(a[0] - b[0], a[1] - b[1]);
      let random_p = vector.mult(randomGaussian(.5, .03));
      temp[0] = b[0] + random_p.x;
      temp[1] = b[1] + random_p.y;
      subdivision(c, a, temp, lvl + random(3), max);
      subdivision(c, b, temp, lvl + random(3), max);
  } else if (d2 > d1 && d2 > d3) {
    let temp = [];
    let vector = createVector(c[0] - a[0], c[1] - a[1]);
    let random_p = vector.mult(random(.2, .8));
    temp[0] = a[0] + random_p.x;
    temp[1] = a[1] + random_p.y;
    subdivision(b, c, temp, lvl + random(3), max);
    subdivision(b, a, temp, lvl + random(3), max);
  } else {
    let temp = [];
    let vector = createVector(b[0] - c[0], b[1] - c[1]);
    let random_p = vector.mult(random(.2, .8));
    temp[0] = c[0] + random_p.x;
    temp[1] = c[1] + random_p.y;
    subdivision(a, b, temp, lvl + random(3), max);
    subdivision(a, c, temp, lvl + random(3), max);
  }
}
