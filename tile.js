class Tile {
  constructor(x, y, w, hp, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.hp = hp;
    this.type = type;
    this.color = this.pickColor(type);
    this.behaviour;
  }
  pickColor(type) {
    switch (type) {
      case "normal":
        this.behaviour = () => {
          console.log("Im normal!");
        };
        return "rgb(255,0,0)";
      case "divide":
        this.behaviour = () => {
          console.log("Im dividing balls!");
          balls.push(
            new Ball(this.x, this.y, createVector(random(5), -random(5)), 20)
          );
        };
        return "rgb(0,255,0)";
      case "speedUp":
        this.behaviour = () => {
          console.log("Getting faster");
          pad.vel += 10;
        };
        return "rgb(0,0,255)";
      case "speedDown":
        this.behaviour = () => {
          console.log("I am lazy");
          pad.vel = 1;
        };
        return "rgb(237, 227, 45)";
      case "sizeUp":
        this.behaviour = () => {
          console.log("So huge");
          pad.w = 150;
        };
        return "rgb(102, 2, 57)";
      case "sizeDown":
        this.behaviour = () => {
          console.log("small");
          pad.w = 30;
        };
        return "rgb(57, 62, 71)";
      case "freakOut":
        this.behaviour = () => {
          console.log("Idasdasgasfasgsafdasfdasal!");
          pad.vel = -pad.vel;
        };
        return "rgb(226, 6, 201)";
      case "immortal":
        this.behaviour = () => {
          console.log("Im immortal!");
        };
        return "rgb(186, 186, 186)";
    }
  }
  show() {
    stroke(4);
    fill(this.color);
    rect(this.x, this.y, this.w, 20);
  }
  checkTop() {}
  checkCollisions(index) {
    //FIXME!!!
    for (let i = 0; i < balls.length; i++) {
      //sprawdzenie odbicia od gory
      if (
        (balls[i].pos.y < this.y &&
          balls[i].pos.y > this.y - balls[i].r &&
          balls[i].pos.x > this.x &&
          balls[i].pos.x < this.x + this.w) ||
        (balls[i].pos.x > this.x &&
          balls[i].pos.x < this.x + this.w &&
          balls[i].pos.y - balls[i].r / 2 < this.y + 20)
      ) {
        balls[i].vel.y = -balls[i].vel.y;
        hit_sound.play();
        if (--this.hp == 0 && this.type != "immortal") {
          tiles.splice(index, 1);
          score++;
          this.behaviour();
          if (tiles.length == 0) {
            showMessage("win");
            lvl++;
            tiles = nextLevel();
          }
        }
        // balls[i].vel = 0;
      }
    }
  }
}
