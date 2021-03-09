let l = 200;

let s = 20;

let dots = 100;

let looping = false;

function setup() {
  createCanvas(1200, 1000);
  background(255);
  colorMode(HSB);
  translate(width/2, height);
  stroke(20, 28);
  strokeWeight(30);
  line(0, 0, 0, -400);
  // stroke(20, 50);
  // strokeWeight(1);
  // for (let i = 0; i < dots; i++) {
  //   point(random(-s/2.2, s/2.2), random(-400));
  // }
  // stroke(0);
  //strokeWeight(s);
  translate(0, -400);
  tree(s, l, 1, 10);
}

function tree(s, len, lvl, max) {
  if (lvl >= max) {
    fill(random(20, 35), 100, 80, .3);
    noStroke();
    ellipse(0, 0, random(8, 12));
    return;
  }
  strokeWeight(s);
  stroke(20, map(lvl, 1, max,100, 20));

  if (lvl > max - 5)
  {
    for (let i = 0; i < 5; i++)
    {
        if (random(1) > 0.5) {
          push();
          rotate(random(PI/3, PI/6));
          line(0, 0, 0, -len);
          translate(0, -len);
          tree(s*.66, len*randomGaussian(.66, 0.05), lvl + 1, max)
          pop();
        }
    }
  } else {
        push();
        rotate(random(PI/3, PI/6));
        line(0, 0, 0, -len);
        // if (lvl < 2) {
        //   stroke(20, 10, 10);
        //   strokeWeight(1);
        //   for (let i = 0; i < dots; i++) {
        //     point(random(-s/2.2, s/2.2), random(-len));
        //   }
        //   stroke(0);
        //   strokeWeight(s);
        // }
        translate(0, -len);
        tree(s*.66, len*randomGaussian(.66, 0.05), lvl + 1, max)
        pop();
    }
  if (lvl > max - 5)
  {
    for (let i = 0; i < 5; i++)
    {
        if (random(1) > 0.5) {
          push();
          rotate(random(-PI/3, -PI/6));
          line(0, 0, 0, -len);
          translate(0, -len);
          tree(s*.66, len*randomGaussian(.66, 0.05), lvl + 1, max)
          pop();
        }
    }
  } else {
          push();
          rotate(random(-PI/3, -PI/6));
          line(0, 0, 0, -len);
          // if (lvl < 2) {
          //   stroke(20, 10, 10);
          //   strokeWeight(1);
          //   for (let i = 0; i < dots; i++) {
          //     point(random(-s/2.2, s/2.2), random(-len));
          //   }
          //   stroke(0);
          //   strokeWeight(s);
          // }
          translate(0, -len);
          tree(s*.66, len*randomGaussian(.66, 0.05), lvl + 1, max)
          pop();
    }
}
