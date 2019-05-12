function nextLevel() {
  let blocks = [];
  switch (lvl) {
    case 1:
      for (let i = 0; i < window_size.width / 50; i++) {
        blocks.push(new Tile(i * 50, 100, 50, 1, "normal"));
      }
      blocks.push(new Tile(width / 2 - 100, 120, 50, 1, "normal"));
      blocks.push(new Tile(width / 2 - 50, 120, 50, 1, "divide"));
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
      break;
  }
  return blocks;
}
