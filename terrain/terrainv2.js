var cols, rows;
var scl = 20;
var w_c = 2000;
var h_c = 2000;
var w = w_c / 2;
var h = h_c / 2;

var flying = 0;

var terrain = [];
let looping = true;

// Setup function
function setup() {
  var c = createCanvas(w_c, h_c, WEBGL);
  //c.parent('sketch-holder');
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
  frameRate(10);
  //noLoop();
  colorMode(HSB, 360, 100, 100);
}

// Draws the terrain
function draw() {
  flying -= 0.2;
  var yoff = flying;

  // Maps each vertex in the terrain to a z value from Perlin noise and adds it to the 2d array
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  // Draws each vertex in 3d space
  clear();
  background(350, 50, 80);
  //translate(0, 50);
  rotateX(PI / 3.5);
  translate(-w / 2, -h / 2);
  stroke(100, 2);
  strokeWeight(0.5);
  //noStroke();
  for (var y = 0; y < rows - 1; y++) {
    randomSeed(y);
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      fill(random(180, 210), random(40, 100), 70);
      //noFill();
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}
