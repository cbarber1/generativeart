let y = 0;
let h = 10;
let cell;
let newcells;
let ruleset = [0, 0, 0, 1, 1, 1, 1, 0];
let colors;

let looping = false;

function setup() {
  createCanvas(2020, 1000);
  background(255);
  colors = [/*'#fadfcc', /*'#e1a396'*/ '#679595','#679595', '#ea9679', '#f6c992', '#d55c5a', '#596088'];
  cell = new Cell();
  cell.CA();
  cell.show();
}

function draw() {
  cell.generate();
  cell.show();
  if (cell.generation > (height / cell.h)) {
    //cell.generation = 0;
    //cell.CA();
    //cell.show();
    noLoop();
    console.log("stop");
  }
}


class Cell {
  constructor() {
    this.h = 20;
    this.cells = new Array(width / this.h);
    this.ruleset;
    this.generation = 0;
  }

  CA() {

    this.ruleset = [0, 0, 0, 1, 1, 1, 1, 0];
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i] = 0;
    }

    this.cells[int(this.cells.length / 2)] = 1;
  }

  generate() {
    let newcells = new Array(this.cells.length);
    for (let i = 0; i < this.cells.length; i++) {
      var left = this.cells[i - 1];
      var middle = this.cells[i];
      var right = this.cells[i + 1];
      var newState = this.rules(left, middle, right);
      newcells[i] = newState;
    }
    this.cells = newcells;
    this.generation++;
  }


  rules(a, b, c) {
    if (a==1 && b==1 && c==1)
    {
      return this.ruleset[0];
    }
    else if (a == 1 && b == 1 && c == 0)
    {
      return this.ruleset[1];
    }
    else if (a == 1 && b == 0 && c == 1)
    {
      return this.ruleset[2];
    }
    else if (a == 1 && b == 0 && c == 0)
    {
      return this.ruleset[3];
    }
    else if (a == 0 && b == 1 && c == 1)
    {
      return this.ruleset[4];
    }
    else if (a == 0 && b == 1 && c == 0)
    {
      return this.ruleset[5];
    }
    else if (a == 0 && b == 0 && c == 1)
    {
    return this.ruleset[6];
    }
    else if (a == 0 && b == 0 && c == 0)
    {
      return this.ruleset[7];
    }
    return 0;

  }

  show() {
    noStroke();
    let gen_color = random(colors);
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i] == 0 ) {
        fill(250);
        //noStroke();
        stroke(0);
        strokeWeight(11);
        //rect(i*this.h, this.generation*this.h, this.h)
        if (random(1) > 0.5) {
        line(i*this.h, this.generation*this.h, i*this.h + this.h, this.generation*this.h + this.h);
        }
        else {
          line(i*this.h + this.h, this.generation*this.h, i*this.h, this.generation*this.h + this.h);
        }
      }
      else {
        noStroke();
        fill(gen_color);
        stroke(color(random(colors)));
        strokeWeight(11);
        if (300 < i *this.h < 500) {
          if (random(1) > 0.5) {
          line(i*this.h, this.generation*this.h, i*this.h + this.h, this.generation*this.h + this.h);
          }
          else {
            line(i*this.h + this.h, this.generation*this.h, i*this.h, this.generation*this.h + this.h);
          }
        }
      }
    }
  }
}
