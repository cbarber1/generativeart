let i = 1;
let loops;

function setup() {
  createCanvas(500, 500);
  //beginRecord(PDF, "collatz.pdf");
  loops = random(200, 600);
  background(0);
}
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
    let len = 10; // 10
    let angle = PI/8; // PI/3
    resetMatrix(); // without it, it could be pretty cool
    translate(0, height/2);//width/2

    for (let j = 0; j < sequence.length; j++) {
      let value = sequence[j];

      if (value % 2 == 0) {
        rotate(angle);
      } else {
        rotate(-angle);
      }
      stroke(random(200,250), random(100, 255), random(100, 150), 50);

      line(0, 0, 0, -len);
      translate(0, -len);

    }
  i++;
  if (i > loops) {
    noLoop();
  }
}

function collatz(n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return (n * 3 + 1)/2;
  }
}
