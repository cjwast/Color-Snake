/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Snake {
  constructor(sx = startingPointX,
    sy = startingPointY,
    w = scale,
    h = scale,
    color = colorArray[0]) {
    this.w = w;
    this.h = h;
    this.direction = DIRECTION_RIGTH;
    this.pieces = [{ x: sx, y: sy }];
    this.nextX = 0;
    this.nextY = 0;
    this.bodyColor = color;
    this.colorArray = [];
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
    if (this.nextX === food.x && this.nextY === food.y) {
      this.colorArray.push(food.color);
      return true;
    }
    return false;
  }

  // Metodo para dibujar las piezas
  drawSnake() {
    this.pieces.forEach((piece, i) => {
      ctx.fillStyle = (i === 0) ? '#5cb2ab' : this.bodyColor.rgb;
      ctx.fillRect(piece.x, piece.y, scale, scale);
      ctx.strokeStyle = '#a8eae5';
      ctx.strokeRect(piece.x, piece.y, scale, scale);
    });
  }

  // Metodo para dibujar los colores
  drawColors() {
    this.colorArray.forEach((color, i) => {
      colorCtx.fillStyle = color.rgb;
      colorCtx.fillRect(0, i * colorScale, 60, 40);
      colorCtx.font = '20px Georgia';
      colorCtx.fillText(color.name, 0, i * colorScale);
    });
  }

  // obtiene la siguiente posicion de la pieza
  getNext() {
    this.nextX = (this.direction.x * scale) + this.pieces[0].x;
    this.nextY = (this.direction.y * scale) + this.pieces[0].y;
  }

  // rota los colores acorde a las arrow keys
  rollsColors(direction = '') {
    if (direction === 'UP') {
      this.colorArray.push(this.colorArray.shift());
    } else {
      this.colorArray.unshift(this.colorArray.pop());
    }
  }

  // establece el color acorde a la flecha derecha
  setColor() {
    if (this.colorArray.length > 0) {
      this.bodyColor = this.colorArray[0];
    }
  }
}
