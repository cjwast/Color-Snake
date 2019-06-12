/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Snake {
  constructor(sx = startingPointX, sy = startingPointY, w = scale, h = scale) {
    this.w = w;
    this.h = h;
    this.direction = DIRECTION_RIGTH;
    this.pieces = [{ x: sx, y: sy }];
    this.nextX = 0;
    this.nextY = 0;
  }

  keepMoving(food) {
    // Dibuja a los cuadros por segundo del interval
    this.drawSnake();

    // Se mueve a la velocidad definida por speed
    if (frs % speed === 0) {
      // Obtiene la siguiente posición y la inserta en el arreglo
      this.getNext();
      this.pieces.unshift({
        x: this.nextX,
        y: this.nextY,
      });

      // Si en la siguiente posicion come score++, FALSO=> remueve cola
      if (this.eats(food)) {
        return true;
      }
      this.pieces.pop();
    }
    return false;
  }

  eats(food) {
    return this.nextX === food.x && this.nextY === food.y;
  }

  drawSnake() {
    this.pieces.forEach((piece, i) => {
      ctx.fillStyle = (i === 0) ? '#5cb2ab' : 'white';
      ctx.fillRect(piece.x, piece.y, scale, scale);
      ctx.strokeStyle = '#a8eae5';
      ctx.strokeRect(piece.x, piece.y, scale, scale);
    });
  }

  getNext() {
    this.nextX = (this.direction.x * scale) + this.pieces[0].x;
    this.nextY = (this.direction.y * scale) + this.pieces[0].y;
  }
}
