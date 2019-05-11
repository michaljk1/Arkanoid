class Tile {
  constructor(x, y, w, hp) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.hp = hp;
  }
  show() {
    stroke(4);
    fill("red");
    rect(this.x, this.y, this.w, 20);
  }
  checkCollisions(index) {
    for (let i = 0; i < balls.length; i++) {
      if (
        balls[i].pos.y < this.y + 40 &&
        balls[i].pos.x > this.x &&
        balls[i].pos.x < this.x + this.w
      ) {
        balls[i].vel.y = -balls[i].vel.y;
        hit_sound.play();
        if (--this.hp == 0) {
          tiles.splice(index, 1);
          score++;
        }
        // balls[i].vel = 0;
      }
    }
  }
}
