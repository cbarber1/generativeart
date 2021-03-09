var cols, rows;
var scl = 20;
var w_c = 2000;
var h_c = 2000;
var w = w_c * 2;
var h = h_c;

let r = 300;

let colors;
var flying = 0;

var terrain = [];
let looping = true;
let seed;

// Setup function
function setup() {
  var c = createCanvas(w_c, h_c, WEBGL);
  //c.parent('sketch-holder');
  cols = w / scl;
  rows = h / scl;

  seed = int(random(100000));
  randomSeed(seed);

  colors = ['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];
  colors2 = ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45'];
  colors3 = ['#e6e2e7', '#c0a5a9','#4d3944','#7083a5','#b3a1b4','#cbcde8','#3a395e', '#1c2242'];

  sun_colors = ['#111c27', '#472a43', '#b23b3a', '#e15249', '#f6793f'];

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
  frameRate(10);
  //noLoop();
  colorMode(HSB, 360, 100, 100);
  background(0, 100, 0);
  noLoop();

}

// Draws the terrain
function draw() {
  flying -= 0.1;
  var yoff = flying;

  // Maps each vertex in the terrain to a z value from Perlin noise and adds it to the 2d array
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -500, 500);
      xoff += 0.02;
    }
    yoff += 0.02;
  }

  // Draws each vertex in 3d space
  //translate(0, 50);
  rotateX(PI / 3.5);
  translate(-w / 2, -h / 2);

  sun();

  strokeWeight(4);
  //noStroke();
  let count = 0;
  for (var y = 0; y < rows - 1; y++) {
    randomSeed(y);
    beginShape();
    for (var x = 0; x < cols; x++) {
      stroke(180, 50, count);

      //fill(random(180, 210), random(40, 100), 70);
      noFill();
      vertex(x * scl, y * scl, terrain[x][y]);
      //vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    count += 1.2;
    endShape();
  }
}

function sun() {
  strokeWeight(5);
  sun = random(height / 4);
  for (let a = 0; a < TWO_PI; a += .2) {
    stroke(360, 50, 80);//random(colors2));
    noFill();
    beginShape();
    vertex(width - 300 + r * sin(a),0, sun +  r * cos(a));
    vertex(width -300  + r * sin(-a), 0, sun  + r * cos(-a));
    endShape();
  }
}
