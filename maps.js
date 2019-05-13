function nextLevel() {
  pad.vel = 5;
  let i = balls.length;
  balls.splice(0, i);
  balls.push(new Ball(width / 2, height / 2, createVector(5, -5), 20));
  pad = new Pad(
    window_size.width / 2 - 50,
    window_size.height - 50,
    100,
    20,
    5
  );
  let blocks = [];
  switch (lvl) {
    case 1:
      for (let i = 0; i < window_size.width / 50; i++) {
        blocks.push(new Tile(i * 50, 100, 50, 1, "normal"));
      }
      blocks.push(new Tile(width / 2 - 100, 120, 50, 1, "normal"));
      blocks.push(new Tile(width / 2 - 50, 120, 50, 1, "divide"));
      blocks.push(new Tile(width / 2 - 150, 120, 50, 1, "freakOut"));
      blocks.push(new Tile(width / 2, 120, 50, 1, "speedDown"));
      blocks.push(new Tile(width / 2 + 50, 120, 50, 1, "normal"));
      break;
    case 2:
      for (let i = 0; i < window_size.width / 50; i++) {
        blocks.push(new Tile(i * 50, 100, 50, 1, "normal"));
        blocks.push(new Tile(i * 50, 120, 50, 1, "normal"));
      }
      blocks.push(new Tile(width / 2 - 100, 140, 50, 1, "normal"));
      blocks.push(new Tile(width / 2 - 50, 140, 50, 1, "speedDown"));
      blocks.push(new Tile(width / 2, 140, 50, 1, "divide"));
      blocks.push(new Tile(width / 2 + 50, 140, 50, 1, "normal"));
      break;
    case 3:
      for (let i = 0; i < window_size.width / 50; i++) {
        blocks.push(new Tile(i * 50, 100, 50, 1, "normal"));
        blocks.push(new Tile(i * 50, 120, 50, 1, "normal"));
      }
      blocks.push(new Tile(width / 2 - 150, 140, 50, 1, "immortal"));
      blocks.push(new Tile(width / 2 - 100, 140, 50, 1, "immortal"));
      blocks.push(new Tile(width / 2 - 50, 120, 50, 1, "divide"));
      blocks.push(new Tile(width / 2 - 50, 140, 50, 1, "immortal"));
      blocks.push(new Tile(width / 2, 140, 50, 1, "immortal"));
      blocks.push(new Tile(width / 2 + 50, 140, 50, 1, "immortal"));
      break;
  }
  return blocks;
}
