let n = 2;
let d = 71;

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  //background(255);
  background(0);
  //rotateX(PI/15);
  //translate(width/2, height/2);
  c = 0;
  stroke(c);

  noFill();
  beginShape()
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 100 * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    let z = r;
    vertex(x, y, z);
  }
  n += .000025;//.00002  n += .00012;//d += .00018; looks sick
  d += .000085;//.00008 is insane
  endShape(CLOSE);
  c += 1;
}
