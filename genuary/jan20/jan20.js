

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  blendMode(MULTIPLY);
  background(255);
  let colors = ['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];

  let verti = [random(width), random(width), random(width), random(width), random(width)];
  //noFill();
  strokeWeight(4);
  noStroke();
  //fill(random(180, 200), 80, 80);
  fill(random(colors))
  beginShape();
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));

  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  // curveVertex(random(width), random(height));
  endShape();
  //fill(random(20, 40), 80, 80);
  fill(random(colors));
  beginShape();
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));

  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  // curveVertex(random(width), random(height));
  endShape();
  //fill(random(120, 140), 80, 80);
  fill(random(colors));
  beginShape();
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));

  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  // curveVertex(random(width), random(height));
  endShape();
  //noStroke();
  //fill(180, 80, 80);
  // //rectMode(CENTER);
  // let x = 0;
  // rect(x, height/2, random(10, 20), random(300, 500));
  // x = x + random(100);
  // rect(x, height/2, random(10, 20), random(-100, -200));
  // x = x + random(100);
  // //fill(random(180, 200), 80, 80);
  //
  // rect(x, height/2, random(10, 20), random(300, 500));
  // x = x + random(100);
  //
  // //fill(random(180, 200), 80, 80);
  //
  // rect(x, height/2, random(10, 20), random(-300, -500));
  // x = x + random(100);
  //
  // //fill(random(180, 200), 80, 80);
  //
  // rect(x, height/2, random(10, 20), random(300, 500));
  // x = x + random(100);
  //
  //
  // //fill(random(180, 200), 80, 80);
  // rect(x, height/2, random(20, 50), random(300, 500));
  // x = x + random(100);
  //
  //
  // //fill(random(180, 200), 80, 80);
  // rect(x, height/2, random(20, 50), random(300, 500));
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
