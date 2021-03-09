let i = 1;
let loops;

let looping = true;
let gaussian = .01;

// Setup function
function setup() {
  var canvas = createCanvas(4000, 4000);
  colors = [['#fadfcc', '#e1a396', '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'], ['#f2cbc9', '#b9767e', '#804d51', '#645764', '#ab6366', '#cfa58f', '#7c3551', '#2b2e45']];
  background(255);
}

// Makes it more random when mouse is pressed
// function mousePressed() {
//   gaussian += 5;
// }

// Draws the reversed sequences from the Collatz Conjecture
function draw() {
  let sequence = [];
  let n = i;
  do {
    sequence.push(n);
    n = collatz(n);
  } while (n != 1);
    sequence.push(1);
    sequence.reverse();


  //Visualize the reversed List
  let len = randomGaussian(40, gaussian); // 10
  let angle = PI/randomGaussian(2, gaussian);; // PI/3
  resetMatrix(); // without it, it could be pretty cool
  translate(randomGaussian(width/2, gaussian), height/2);//width/2

  for (let j = 0; j < sequence.length; j++) {
    let value = sequence[j];

    if (value % 2 == 0) {
      rotate(angle);
    } else {
      rotate(-angle);
    }
    stroke(40, 58, 58, 50); // 50 alpha normally

    line(randomGaussian(0, gaussian), randomGaussian(0, gaussian), 0, -len);
    translate(0, -len);

  }
  i += random(10);
  if (i > loops) {
    i = 1;
    //noLoop();
    background(0);
    gaussian = .01;
  }
}

// Collatz Conjecture
function collatz(n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return (n * 3 + 1)/2;
  }
}
