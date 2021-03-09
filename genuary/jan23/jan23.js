
var step = 800;
let colors, colors2;

function setup() {
  createCanvas(8000, 8000);
  noLoop();
  background(255);
  rectMode(CENTER);
  //colors = ["#eaa690", "#60403f", "#f68366", "#fd9848","#ffc56d"];
  colors = [['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'], ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45'], ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45']];
  colors2 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
}
// function mousePressed() {
//   clear();
//   redraw();
// }
function squares(x, y, w) {
  strokeWeight(12);
  fill(random(colors2));
  let xchange = random(-2, 2);
  let ychange = random(-2, 2);
  if (w > 96) {
    console.log(w);
    rect(x, y, w);
    squares(x, y, w/randomGaussian(1.5, .2));
  }
  return;
  //for (let i = w; i > 0; i -= randomGaussian(10, 5)) {
    //stroke(random(colors[int(random(4))]));
    //rect(x, y, i, i);
//  }
}
function draw() {
  frameRate(10);
  for (let x = step/2 + 800; x < width - 800; x += step) {
    for (let y = step/2 + 800; y < height - 800; y += step) {
      squares(x, y, step);
    }
  }
}





//
//
// let step = 40;
//
// let seed;
//
// function setup() {
//   createCanvas(4000, 4000);
//   background(255);
//   seed = random(100000);
//   randomSeed(seed);
//
//   let colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
//   for (let x = 360; x < width - 400; x+= step) {
//     let gaus = 0;
//     let gaus1 = 0;
//     let bro = .5;
//     for (let y = 360; y < height - 400; y += step) {
//       bro += .1
//       strokeWeight(4);
//       //fill(random(colors));
//       //strokeWeight(randomGaussian(1, gaus2));
//       strokeWeight(bro);
//       push();
//       //rotate(randomGaussian(0, gaus1));
//       rect(x, y, step + randomGaussian(0, gaus), step + randomGaussian(0, gaus));
//       pop();
//       gaus += randomGaussian(0, gaus1);
//       gaus1 += .1;
//     }
//   }
// }
