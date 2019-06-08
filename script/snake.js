/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Snake {
  constructor(x = startingPointX, y = startingPointY, w = scale, h = scale) {
    this.position = new Position(x, y);
    this.w = w;
    this.h = h;
    this.direction = new Direction(1, 0);
    this.tailLength = 3;
    this.drawedTail = [];
  }

  increaseTail() {
    // snake.tailLength += 1;

    while (this.drawedTail.length < this.tailLength) {
      this.drawedTail.push({
        position: new Position(),
        direction: new Direction(),
        w: this.w,
        h: this.h,
      });
    }
  }

  keepMoving() {
    this.increaseTail();
    if (frs % speed === 0) {
      this.drawedTail[0].position = this.position;
      this.position.x += this.direction.x * scale;
      this.position.y += this.direction.y * scale;
    }

    for (let i = this.drawedTail.length - 1; i > 0; i--) {
      this.drawedTail[i] = this.drawedTail[i];
    }
    this.drawedTail.forEach((tail) => {
      ctx.fillStyle = snakeColor;
      ctx.fillRect(tail.position.x, tail.position.y, tail.w, tail.h);
    });

    ctx.fillStyle = snakeColor;
    ctx.fillRect(this.position.x, this.position.y, this.w, this.h);
  }

  eats(food) {
    return this.position.x < food.position.x + food.h &&
      this.position.x + this.w > food.position.x &&
      this.position.y < food.position.y + food.w &&
      this.position.y + this.w > food.position.y;
  }
}
