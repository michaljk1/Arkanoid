var balls = [];
var tiles = [];
var score = 0;
var lvl = 1;
var hit_sound;

const window_size = {
  width: 500,
  height: 700
};

var pad = {
  x: window_size.width / 2 - 50,
  y: window_size.height - 50,
  w: 100,
  h: 20,
  vel: 5,
  color: "rgb(255, 255, 0)",
  show() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  },
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      pad.x -= pad.vel;
      console.log("left");
    }
    if (keyIsDown(RIGHT_ARROW)) pad.x += pad.vel;
  },
  checkEdges() {
    if (this.x < 0) this.x = 0;
    else if (this.x > window_size.width - this.w)
      this.x = window_size.width - this.w;
  },
  checkCollisions() {
    for (let i = 0; i < balls.length; i++) {
      if (
        balls[i].pos.y > this.y &&
        balls[i].pos.x > this.x &&
        balls[i].pos.x < this.x + this.w
      ) {
        console.log("BUM!");
        balls[i].vel.y = -balls[i].vel.y;
      }
    }
  }
};
function preload() {
  hit_sound = new Audio("hit_sound.wav");
}
function setup() {
  createCanvas(window_size.width, window_size.height);
  balls.push(new Ball(width / 2, height / 2, createVector(5, 5), 20));
  for (let i = 0; i < 5; i++) {
    tiles.push(new Tile(i * 50, 350, 50, 1));
    tiles.push(new Tile(500 - i * 50, 250, 50, 1));
  }
  frameRate(60);
}

function draw() {
  background(0, 0, 0);
  initMenu();
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].show();
    tiles[i].checkCollisions(i);
  }
  pad.show();
  for (let i = 0; i < balls.length; i++) {
    balls[i].show();
    balls[i].move();
    balls[i].checkEdges(i);
  }
  pad.move();
  pad.checkCollisions();
  pad.checkEdges();
}
function initMenu() {
  strokeWeight(4);
  fill(255, 255, 255);
  textSize(40);
  text("Score " + score, 350, 40);
  text("LVL " + lvl, 10, 40);
  line(0, 50, width, 50);
}
function mouseClicked() {
  balls.push(new Ball(mouseX, mouseY, createVector(0, -4), 20));
}
