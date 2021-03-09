
let variation = 50;

let step = 200;

function setup() {
  createCanvas(2000,2000);
  push();
  //background(255);
  pop();
  colorMode(HSB);
  blendMode(SOFT_LIGHT);

  for (let x = 200; x < width - 200; x += step) {
    for (let y = 200; y < height - 200; y += step) {
      for (let i = 0; i < 20; i++ )
      {
        fill(180, 50, 50, .1);

        deformed_circle(x + step/2 + random(-100, 100), y + step/2 + random(-100, 100), 200);
      }
    }
  }
  for (let i = 0; i < 50; i++ )
  {
    fill(180, 50, 50, .1);

    //deformed_circle(width/2 + random(-100, 100), height/2 + random(-100, 100), 600);
    fill(0, 50, 50, .1);
    deformed_circle(width/3 + random(-100, 100), height/3 + random(-100, 100), 600);
    fill(330, 50, 50, .1);
    deformed_circle(width/1.5 + random(-100, 100), height/1.5 + random(-100, 100), 600);
  }


}











function deformed_circle(x, y, r) {
  push();
  translate(x, y);

  let points = [];
  for (let i = 0; i < TWO_PI; i += .15) {
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
  let rand = int(random(8));
  //fill(color(colors[random_colors][rand]));
  noStroke();
  //strokeWeight(4);
  beginShape();
  for (p in final) {
    curveVertex(final[p].x, final[p].y);
  }
  curveVertex(final[0].x, final[0].y);
  curveVertex(final[1].x, final[1].y);
  curveVertex(final[2].x, final[2].y);
  endShape();

  pop();
}
