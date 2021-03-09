let step = 100;

let seed;

let colors;

let offset = 2;
let tileStep;

function setup() {
  createCanvas(1200, 1200);
  background(255);
  colorMode(HSB);
  seed = int(random(100000));
  tileStep = (width - offset * 2) / 7;
  randomSeed(seed);
  strokeWeight(5);

  colors = ['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];

  noFill();
  let count = 1;
  let sc = 0;
  for (let x = 100; x < width - 100; x += step) {
    for (let y = 100; y < height - 100; y += step) {
      sc += 3;
      if (sc >= 360) {
        sc = 0;
      }
      stroke(sc + 40, 80, 60);
      beginShape();
      count+=1;
      for (let i = 0; i < count; i++ ) {
        vertex(x + random(50), y + random(50));
      }

      endShape();
    }
  }
}
