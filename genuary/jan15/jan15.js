let seed;

let looping = false;

let shadow = 500;

function setup() {
  createCanvas(800, 800);
  seed = int(random(100000));
  randomSeed(seed);
  colorMode(HSB);

  container = new Container(50, height/3, 700, 200);
  container.show();
}

class Container {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    fill(200, 80, 80);
    rect(this.x, this.y, this.w, this.h);
    stroke(0, 0, 0, 0.3);
    strokeWeight(8);
    for (let i = 20; i < this.w; i += 30) {
      line(this.x + i, this.y + 3, this.x + i, this.y + this.h - 3);
      // for(let j = 0; j < shadow; j++) {
      //   push();
      //   stroke(0, 0, 0);
      //   point(randomGaussian(this.x + i, 1.5), random(this.y, this.y+this.h));
      //   pop();
      // }
    }
  }
}
