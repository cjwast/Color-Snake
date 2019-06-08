/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Food {
  constructor(w = scale, h = scale, color = '#e8408e') {
    this.position = new Position();
    this.w = w;
    this.h = h;
    this.color = color;
  }

  appear(position, color = '#e8408e') {
    this.position = position;
    ctx.fillStyle = color;
    ctx.fillRect(this.position.x, this.position.y, this.w, this.h);
  }
}
