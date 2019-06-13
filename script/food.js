/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Food {
  constructor(w = scale, h = scale, color = colorArray[0]) {
    this.x = 0;
    this.y = 0;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  appear(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    ctx.fillStyle = this.color.rgb;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
