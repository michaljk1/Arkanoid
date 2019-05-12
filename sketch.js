var balls = [];
var tiles = [];
var score = 0;
var lvl = 1;
var hit_sound;
var win_sound;
var lose_sound;
var pad;
const window_size = {
  width: 500,
  height: 700
};

function preload() {
  hit_sound = new Audio("hit_sound.wav");
  win_sound = new Audio("win_sound.wav");
  lose_sound = new Audio("lose_sound.wav");
}
function setup() {
  pad = new Pad(
    window_size.width / 2 - 50,
    window_size.height - 50,
    100,
    20,
    5
  );
  createCanvas(window_size.width, window_size.height);
  balls.push(new Ball(width / 2, height / 2, createVector(5, 5), 20));
  tiles = nextLevel();
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
  text("Score " + score, 330, 40);
  text("LVL " + lvl, 10, 40);
  line(0, 50, width, 50);
}
function mouseClicked() {
  balls.push(new Ball(mouseX, mouseY, createVector(0, -4), 20));
}
function showMessage(message) {
  switch (message) {
    case "win":
      // textSize(50);
      // background(0, 255, 0);
      // text("You WIN", width / 2 - 100, height / 2);
      win_sound.play();
      break;
    case "lose":
      textSize(50);
      background(255, 0, 0);
      text("You LOSE", width / 2 - 110, height / 2);
      lose_sound.play();
      break;
  }
}
