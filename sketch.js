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
//menu objects
var start_button;
var pause_button;

//game loop vars
var game_started = false;
var game_over = false;
var game_paused = false;

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

  mainMenu();
}

function draw() {
  background(0, 0, 0);
  if (!game_over) {
    if (!game_started) {
      mainMenu();
    } else {
      GameBar();
      if (game_paused) showMessage("pause");
      else {
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
    }
  } else showMessage("lose");
}
function GameBar() {
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
function keyPressed() {
  if (keyCode === ESCAPE) {
    game_paused = true;
    pause_button.show();
  }
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
    case "pause":
      background(155, 31, 130);
      textSize(50);
      text("PAUSE", width / 2 - 100, height / 2 - 200);
      if (!pause_button) pause_button = createButton("Resume Game");
      pause_button.position(width / 2 - 90, height / 2);
      pause_button.size(150, 20);
      pause_button.mousePressed(() => {
        pause_button.hide();
        game_paused = false;
      });
      break;
  }
}
function mainMenu() {
  if (!start_button) start_button = createButton("Start Game");
  start_button.position(width / 2 - 50, height / 2);
  start_button.size(100, 50);
  start_button.mousePressed(() => {
    start_button.hide();
    game_started = true;
  });
  fill(61, 229, 255);
  textSize(50);
  text("ARKANOID", width / 2 - 140, height / 2 - 200);
  textSize(20);
  text("Press ESC to pause !", width / 2 - 110, height / 2 - 150);
}
