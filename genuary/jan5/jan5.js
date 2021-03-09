
n = 6;d = 29;
setup=_=>{
  createCanvas(1000, 1000);angleMode(DEGREES);
}
draw=_=>{
  clear();
  noFill();
  beginShape(TRIANGLE_STRIP);
  for (i=0;i<361;i++) {
    k = i * d;r = 300 * sin(n*k);x = r * cos(k);y = r * sin(k);
    vertex(x + 500, y + 500);
  }
  n += .000025;
  d += .000085;
  endShape();
}
