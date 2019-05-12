class Ball {
  constructor(x, y, vel, r) {
    this.pos = createVector(x, y);
    this.vel = vel;
    this.r = r;
  }
  show() {
    ellipseMode(CENTER);
    fill(255, 255, 255);
    ellipse(this.pos.x, this.pos.y, this.r);
  }
  move() {
    this.pos.add(this.vel);
  }
  checkEdges(index) {
    if (
      this.pos.x + this.r / 2 > window_size.width - this.vel.x ||
      this.pos.x < this.r / 2 - this.vel.x
    ) {
      this.vel.x = -this.vel.x;
    } else if (this.pos.y < 50 + this.r / 2) this.vel.y = -this.vel.y;
    else if (this.pos.y > window_size.height) {
      console.log("deleting " + index + "ball");
      balls.splice(index, 1);
      if (balls.length < 1) {
        showMessage("lose");
        noLoop();
      }
    }
  }
}
