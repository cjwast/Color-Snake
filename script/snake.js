/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Snake {
  constructor(x = startingPointX, y = startingPointY, w = scale, h = scale) {
    this.position = new Position(x, y);
    this.w = w;
    this.h = h;
    this.direction = new Direction(1, 0);
    this.tailLength = 5;
    this.drawedTail = [];
  }

  increaseTail() {
    // this.tailLength += 1;
    while (this.drawedTail.length < this.tailLength) {
      this.drawedTail.push({
        position: new Position(this.position.x, this.position.y),
        w: this.w,
        h: this.h,
      });
    }
  }

  keepMoving() {
    this.increaseTail();


    console.group(`Current frame: ${frs}`);

    if (frs % speed === 0) {
      this.position.x += this.direction.x * scale;
      this.position.y += this.direction.y * scale;
    }


    this.drawedTail[0].position = new Position(this.position.x, this.position.y);

    for (let i = this.tailLength; i < 0; i--) {
      this.drawedTail[i].position = new Position(this.drawedTail[i - 1].position.x, this.drawedTail[i - 1].position.y);
    }

    this.drawedTail.forEach(e => console.log(`F => ${frs} tail position (${e.position.x}, ${e.position.y})`));
    console.log(`F => ${frs} snake position (${this.position.x}, ${this.position.y})`);

    this.drawedTail.forEach((tail) => {
      ctx.fillStyle = snakeColor;
      ctx.fillRect(tail.position.x, tail.position.y, scale, scale);
    });

    ctx.fillStyle = snakeColor;
    ctx.fillRect(this.position.x, this.position.y, this.w, this.h);

    console.groupEnd();
  }

  eats(food) {
    return this.position.x < food.position.x + food.h &&
      this.position.x + this.w > food.position.x &&
      this.position.y < food.position.y + food.w &&
      this.position.y + this.w > food.position.y;
  }
}
