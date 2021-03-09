class Walker {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0,0);
    //this.vel = p5.Vector.random2D();
    //this.vel.mult(random(3));
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(mass) * 10;
  }
  friction() {
    let diff = height - (this.pos.y + this.r);

    if (diff < 1) {
      let force = this.vel.copy();
      force.normalize();
      force.mult(-1);
      let normal = this.mass;
      force.setMag(mu * normal);

      this.applyForce(force);
    }
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  edges() {
    var slope = this.pos.x * -1/6;
    //console.log(this.pos.x);
    if (this.pos.y >=  height - (slope + 200 + this.r)) {
      this.pos.y = height - (slope + 200 + this.r);
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    //this.mouse = createVector(mouseX, mouseY);
  //  this.acc = p5.Vector.sub(this.mouse, this.pos);
    //noise(this.acc);
  //  this.acc.setMag(.4);
    this.vel.add(this.acc);
  //  this.vel.limit(5)
    this.pos.add(this.vel);
    this.acc.set(0,0)
  }

  show() {
    stroke(255);
  //  fill(255);
  noFill();
    ellipse(this.pos.x, this.pos.y, this.r*2);
  }
}
