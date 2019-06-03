/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Snake {
  constructor(x = startingPointX, y = startingPointY, w = scale, h = scale) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speedX = baseSpeedX;
    this.speedY = 0;
  }

  keepMoving() {
    ctx.fillStyle = snakeColor;
    this.x += this.speedX;
    this.y += this.speedY;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
