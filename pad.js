class Pad {
  constructor(x, y, w, h, vel) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vel = 5;
    this.color = "rgb(255, 255, 0)";
    this.dir = 1; //1 = right;  -1 = left
  }
  show() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      pad.x -= pad.vel;
      pad.dir = -1;
    } else if (keyIsDown(RIGHT_ARROW)) {
      pad.x += pad.vel;
      pad.dir = 1;
    } else this.dir = 0;
  }
  checkEdges() {
    if (this.x < 0) this.x = 0;
    else if (this.x > window_size.width - this.w)
      this.x = window_size.width - this.w;
  }
  checkCollisions() {
    for (let i = 0; i < balls.length; i++) {
      if (
        balls[i].pos.y > this.y &&
        balls[i].pos.x > this.x &&
        balls[i].pos.x < this.x + this.w
      ) {
        console.log("BUM!");
        balls[i].vel.y = -balls[i].vel.y;
        balls[i].vel.x += this.dir * this.vel;
      }
    }
  }
}
