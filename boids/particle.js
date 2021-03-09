class Boid {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(1, 3));
    this.acc = createVector();
    this.maxForce = 0.1;
    this.maxSpeed = 4;
    this.perception = 50;
  }

  edges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }

  align(boids) {
    let steering = createVector();
    let cohesion = createVector();
    let both = [];
    let total = 0;
    for (let other of boids) {
      let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (d < this.perception && other != this) {
        steering.add(other.velocity);
        cohesion.add(other.position);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      cohesion.div(total);
      // Steering algorithm
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
      cohesion.sub(this.position);
      // Steering algorithm
      cohesion.setMag(this.maxSpeed);
      cohesion.sub(this.velocity);
      cohesion.limit(this.maxForce);
    }
    both[0] = steering;
    both[1] = cohesion
    return both;
  }

  separation(boids) {
    let perception = 50;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (d < this.perception && other != this) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.div(pow(d, 2));
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      // Steering algorithm
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);

    }
    return steering;
  }

  flock(boids) {
    let alignment = this.align(boids)[0];
    let cohesion = this.align(boids)[1];
    let separation = this.separation(boids);
    this.acc.add(alignment);
    this.acc.add(cohesion);
    this.acc.add(separation);
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acc);
    this.velocity.limit(this.maxSpeed);
    this.acc.mult(0);
  }

  show() {
    strokeWeight(4);
    stroke(0);
    let size = 1;
    triangle(this.position.x, this.position.y, this.position.x -size, this.position.y -size, this.position.x +size, this.position.y +size);
  }
}
