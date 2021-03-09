let x = 0;

let looping = true;

let seed;
let colors;

function setup() {
  createCanvas(1000, 1000);
  rect(0,0, 1000);
  seed = int(random(100000));
  colors = ['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];
  colors2 = ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45'];
  colors3 = ['#e6e2e7', '#c0a5a9','#4d3944','#7083a5','#b3a1b4','#cbcde8','#3a395e', '#1c2242'];
  randomSeed(seed);
  noStroke();
  subdivision(0, 0, 1000, 1000, 1, 12);
}

function subdivision(x, y, w, h, lvl, max) {
  if (lvl >= max) {
    return;
  }
  fill(random(colors3));
  if (random(1) < 0.5) {
    rect(x, y, w/2, h);
    subdivision(x, y, w/2, h, lvl + random(3), max);
  } else {
    rect(x,y, w, h/2);
    subdivision(x, y, w, h/2, lvl + random(3), max)
  }

  if (random(1) < 0.5) {
    rect(x + w/2, y, w/2, h);
    subdivision(x+w/2, y, w/2, h, lvl + random(3), max);
  } else {
    rect(x + w/2,y, w, h/2);
    subdivision(x+w/2, y, w, h/2, lvl + random(3), max)
  }
  if (random(1) < 0.5) {
    rect(x + w/2, y + h/2, w/2, h);
    subdivision(x+w/2, y+h/2, w/2, h, lvl + random(3), max);
  } else {
    rect(x + w/2,y + h/2, w, h/2);
    subdivision(x+w/2, y+h/2, w, h/2, lvl + random(3), max)
  }

  if (random(1) < 0.5) {
    rect(x, y + h/2, w/2, h);
    subdivision(x, y + h/2, w/2, h, lvl + random(3), max);
  } else {
    rect(x,y + h/2, w, h/2);
    subdivision(x, y + h/2, w, h/2, lvl + random(3), max)
  }
}
