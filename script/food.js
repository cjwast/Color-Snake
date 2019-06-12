/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Food {
  constructor(w = scale, h = scale, color = '#e8408e') {
    this.x = 0;
    this.y = 0;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  appear(x, y, color = '#e8408e') {
    this.x = x;
    this.y = y;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
