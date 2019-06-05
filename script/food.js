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
    ctx.fillStyle = color;
    ctx.fillRect(x, y, this.w, this.h);
  }
}
