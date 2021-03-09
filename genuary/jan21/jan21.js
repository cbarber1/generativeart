let colors;


function setup() {
  createCanvas(2000, 2000);
  colors = ['#002a29', '#007a79', '#c7cedf'];
  background(255);
  rectMode(CENTER);
  f(width/2, height/2, 100);
  for (let i = 0; i < 10; i++) {
    push();
    translate(random(width), random(height));
    f(random(width), random(height), 100);
    pop();
  }
}

function f(w, h, x) {
  push();
  //translate(width/2, height/2);
  fill(0, 20);
  //translate(random(w), random(h));
  rotate(randomGaussian(-PI, PI));
  ellipse(w, h, x, x);
  pop();
  if (x  < .2) {
    return;
  }
  f(w, h, 1 * x / 4);
  f(w, h, 2 * x / 4);
  f(w, h, 3 * x / 4);
}
