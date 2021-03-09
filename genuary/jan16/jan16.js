let seed;

let variation;

let bagels = [];

let looping = true;

let r = 500;

function setup() {
  createCanvas(2000, 2000);
  colorMode(HSB);
  background(255);
  seed = random(100000);
  randomSeed(seed);
  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let location = true;
    for (let bagel of bagels) {
      let d = dist(x, y, bagel.x, bagel.y);
      var distance = bagel.r / 2 + r / 2;

      if (location) {
        if (d - 1 > distance) {
          location = true;
        } else {
          location = false;
        }
      }
    }
    if (location) {
      bagels.push(new Bagel(x,y, r));
    }

  }

  // for (let x = r/2; x < width; x+= r) {
  //   for (let y = r/2; y < height; y+= r) {
  //     bagels.push(new Bagel(x,y,r));
  //   }
  // }
  for (let bagel of bagels) {
    bagel.show();
  }
}

class Bagel {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.location;
    this.poppy = random(1) <= 0.5;
    this.sesame = random(1) <= 0.5;
  }

  show() {

    // outer ring
    fill(34, 33, random(85, 90));
    variation = 180;
    deformed_circle(this.x, this.y, this.r);
    stroke(0);
    // lighter inner
    noStroke();
    fill(34, 33, random(90, 95));
    deformed_circle(this.x, this.y, this.r / 2.2);
    stroke(0);
    if (this.poppy && this.sesame) {
      console.log("poppy+sesame");
      for (let i = 0; i < 3000; i++) {
          if (random(1) <= 0.5) {
          fill(0,100,0);
          let angle= random(TWO_PI);
          ellipse(this.x + (random(this.r / 6, this.r / 2.1) * sin(angle)), this.y+ (random(this.r / 6, this.r / 2.1) * cos(angle)), 5);
        } else {
          fill(34, 33, 95);
          noStroke();
          let angle= random(TWO_PI);
          ellipse(this.x + (random(this.r / 6, this.r / 2.1) * sin(angle)), this.y+ (random(this.r / 6, this.r / 2.1) * cos(angle)), 3, 6);
          stroke(0);
        }
      }
    } else if (this.poppy) {
        console.log("poppy");
        for (let i = 0; i < 2000; i++) {
          fill(0,100,0);
          let angle= random(TWO_PI);
          ellipse(this.x + (random(this.r / 6, this.r / 2.1) * sin(angle)), this.y+ (random(this.r / 6, this.r / 2.1) * cos(angle)), 5);
        }
      } else if (this.sesame) {
        console.log("sesame");
        for (let i = 0; i < 2000; i++) {
          fill(34, 33, 95);
          noStroke();
          let angle= random(TWO_PI);
          ellipse(this.x + (random(this.r / 6, this.r / 2.1) * sin(angle)), this.y+ (random(this.r / 6, this.r / 2.1) * cos(angle)), 3, 6);
          stroke(0);
      }
    }
    // inner
    fill(0, 0, 100);
    deformed_circle(this.x, this.y, this.r / 3);

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

  // Create outline and shape
  let rand = int(random(4));
  //fill(colors[random_colors][rand]);
  strokeWeight(8);
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
