let looping = true;

let variation  = 50;
let colors;

function setup() {
  createCanvas(1000, 1000);
  background(255);
  noFill();
  //ellipse(width/2, height/2, 600);
  colors = ['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];
  colors2 = ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45'];

  deformed_circle(width/2, height/2, random(600, 700));
  deformed_circle(width/2, height/2, random(600, 700));
  deformed_circle(width/2, height/2, random(600, 700));
  deformed_circle(width/2, height/2, random(600, 700));
}

function deformed_circle(x, y, r) {
  push();
  translate(x, y);

  let points = [];
  for (let i = 0; i < TWO_PI; i += TWO_PI / 10.0) {
    let p = createVector(r/2*sin(i), r/2*cos(i));
    append(points, p);
  }

  // Create deformed_circle
  let final = [];
  for (p in points) {
    let x_change = points[p].x / variation; // 55 normally
    let y_change = points[p].y / variation;

    let change = random(-3, 3);
    let new_p = createVector(points[p].x + x_change * change, points[p].y + y_change * change);
    append(final, new_p);
  }
  console.log(points);
  console.log(final);

  // Create outline and shape
  //let rand = int(random(4));
  //fill(random(colors));
  strokeWeight(4);
  stroke(0, 50);
  beginShape();
  for (p in final) {
    curveVertex(final[p].x, final[p].y);
  }
  curveVertex(final[0].x, final[0].y);
  curveVertex(final[1].x, final[1].y);
  curveVertex(final[2].x, final[2].y);
  endShape();

  for (let i = 0; i < 200; i++) {
  //  stroke(random(colors2));
    rand1 = random(final);
    rand2 = random(final);
    line(rand1.x,rand1.y, rand2.x, rand2.y);
  }

  pop();
}
