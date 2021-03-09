var step = 100;
let colors, colors2;

function setup() {
  createCanvas(500, 500);
  noLoop();
  rectMode(CENTER);
  //colors = ["#eaa690", "#60403f", "#f68366", "#fd9848","#ffc56d"];
  colors = [['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'], ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45'], ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45']];
  colors2 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
}
function mousePressed() {
  clear();
  redraw();
}
function squares(x, y, w) {
  strokeWeight(1.5);
  fill(random(colors[int(random(3))]));
  let xchange = random(-2, 2);
  let ychange = random(-2, 2);
  if (w > 12) {
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
  for (let x = step/2; x < width; x += step) {
    for (let y = step/2; y < height; y += step) {
      squares(x, y, step);
    }
  }
}
