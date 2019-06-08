/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Snake {
  constructor(x = startingPointX, y = startingPointY, w = scale, h = scale) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speedX = 1;
    this.speedY = 0;
    this.direction = new Direction(1, 0);
    this.tailLength = 0;
    this.drawedTail = [];
  }

  keepMoving() {
    if (frs % baseSpeed === 0) {
      this.x += this.direction.x * scale;
      this.y += this.direction.y * scale;
    }
    ctx.fillStyle = snakeColor;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  eats(food) {
    return this.x < food.x + food.w &&
      this.x + this.w > food.x &&
      this.y < food.y + food.w &&
      this.y + this.w > food.y;
  }
}
