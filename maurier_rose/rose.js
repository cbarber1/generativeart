let n = 6; // 6
let d = 71; // 71

let looping = true;

function setup() {
  createCanvas(4000, 4000);
  angleMode(DEGREES);
  background(255);
  colorMode(HSB);
  noLoop();
}

function draw() {
  background(255, 0);
  translate(width/2, height/2);
  color = randomGaussian(180, 10);
  //stroke(color, 100, 100);
  strokeWeight(4);
  noFill();
  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i < 361; i+=.5) {//randomGaussian(.4, -.02)) {
    let k = i * d;
    let r = (1700) * sin(n*k); // 200 if 500 width
    let x = r * cos(k);
    let y = r * sin(k);
    //strokeWeight(randomGaussian(.5, .01));
    vertex(x, y);
  }
  n += .000025;//.00002  n += .00012;//d += .00018; looks sick
  d += .000085;//.00008 is insane
  endShape(CLOSE);
  color += 1;
}
