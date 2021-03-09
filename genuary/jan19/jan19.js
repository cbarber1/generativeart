let step = 40;

let seed;

function setup() {
  createCanvas(4000, 4000);
  background(255);
  seed = random(100000);
  randomSeed(seed);

  let colors = ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45'];

  for (let x = 360; x < width - 400; x+= step) {
    let gaus = 0;
    let gaus1 = 0;
    for (let y = 360; y < height - 400; y += step) {
      strokeWeight(4);
      //strokeWeight(randomGaussian(1, gaus1));
      push();
      //rotate(randomGaussian(0, gaus1));
      rect(x, y, step + randomGaussian(0, gaus), step + randomGaussian(0, gaus));
      pop();
      gaus += .4;
      gaus1 += .0001;
    }
  }
}
