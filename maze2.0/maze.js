var step;
let colors;
let colors2;

// setup for the canvas and colors
function setup() {
  var canvas = createCanvas(4000, 4000);

  step = 100;

  colors = ["#eaa690", "#60403f", "#f68366", "#fd9848","#ffc56d"];
  colors2 = ['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];

  noLoop();

}

// randomly making a diagonal line one way or the other
function cross(x, y, width, height) {
  var change = random(1);
  if (change < 0.5){
    line(x, y, x+ width, y + height);
  }
  else if (0.5 <= change && change <= 1){
    line(x + width, y, x, y + height);
  }
  else if (0.3 < change && change <= 0.45) {
     line(x, y, x, y + height);
  }
  else if (0.45 < change && change <= 0.6) {
     line(x + width, y, x + width, y + height);
  }
  else if (0.6 < change && change <= .8) {
     line(x, y, x + width, y);
  } else {
    line(x, y + height, x + width, y + height);
  }

}

// decreases the step value when mouse is pressed in the canvas, and redraws
function mousePressed() {
  if (0 <= mouseX && 0 <= mouseY && mouseX <= width && mouseY <= height) {
    if (step <= 10) {
      step = 100;
    }
    step -= 2;
    redraw();
  }

}

// draws the lines in each grid piece
function draw() {
  background(255);
  strokeWeight(20);
  rectMode(CENTER);
  //rect(width/2, height/2, 1600);
  for (let x = 400; x < width - 400; x += step) {
    for (let y = 400; y < height - 400; y += step) {
      //stroke(random(colors2));
      strokeWeight(40); //5 normally
      cross(x, y, step, step);
    }
  }
}
