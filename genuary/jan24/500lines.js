function setup() {
  createCanvas(1000, 1000);

  let colors = ['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];
  let colors2 = ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45'];
  let colors3 = ['#e6e2e7', '#c0a5a9','#4d3944','#7083a5','#b3a1b4','#cbcde8','#3a395e', '#1c2242'];
  let strokes = ['#f0bc2a', '#2c8a92', '#101615', '#00283f', '#ea8a34','#f0bc2a','#2c8a92'];
  let currents = ['#b84149','#48384c', '#92789e', '#656566', '#e79934','#48384c','#48384c', '#c0b0c3','#c0b0c3','#c0b0c3','#656566', '#e79934']


  background(255);
  let r = 400;
  for (let i = 0; i < 500; i++) {
    a = random(TWO_PI);
    b = random(TWO_PI);
    strokeWeight(randomGaussian(1, i/140));
    stroke(random(currents));
    strokeCap(SQUARE);
    line(width / 2 + r * sin(a), height / 2 + r * cos(a), width / 2 + r * sin(b), height / 2 + r * cos(b));
  }
  fill(255);
  //noStroke();
  stroke(0);
  strokeWeight(4);
//  ellipse(width/2, height/2, 100);
  noFill();
  ellipse(width/2, height/2, 800);
}
