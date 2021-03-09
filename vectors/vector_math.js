let walkers = [];
let mu = 0.1;
let bruh;

function setup () {
  createCanvas(600, 600);
  walkers.push(new Walker(width/2, height/2, 20));
  walkers.push(new Walker(width/2, height/2, 10));
}

function draw() {
  background(0);
  bruh = line(600, 500, 0, 400);

  for (let walker of walkers) {
    let gravity = createVector(0, .5);
    let weight = p5.Vector.mult(gravity, walker.mass);
    walker.applyForce(weight);
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      walker.applyForce(wind);
    }
    walker.friction();
    walker.update();
    walker.edges();
    walker.show();
}
}
