
let looping = false;

let step = 60;
let colors;

function setup() {
  createCanvas(1000, 1000);
  blendMode(OVERLAY);
  noStroke();
  colors = ['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);

  for (let x = 180 + step / 2; x < width - 180; x += step) {
    for (let y = 180+ step /2; y < height - 180; y += step) {

    fill(random(colors));
    rect(x, y, random(50, 100), random(100, 300))
  }
}
}
