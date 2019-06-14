/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Enemy {
  constructor(id, sx, sy, color = colorArray[0]) {
    this.id = id;
    this.steps = [];
    this.pieces = [
      { x: sx - scale * 0, y: sy },
      { x: sx - scale * 1, y: sy },
      { x: sx - scale * 2, y: sy },
      { x: sx - scale * 3, y: sy },
      { x: sx - scale * 4, y: sy },
    ];
    this.nextX = 0;
    this.nextY = 0;
    this.bodyColor = color;
  }

  keepMoving(snake) {
    // Dibuja a los cuadros por segundo del interval
    this.drawEnemy();

    // Se mueve a la velocidad definida por speed
    if (frs % (speed + 30) === 0) {
      // Obtiene los pasos para acercarse a Snake
      this.lookForSnake(snake);
      this.setShortestStep(snake);
      // Obtiene la siguiente posicion acorde al paso restante.
      this.getNextPosition();
      this.steps = [];
      // Inserta la el nuevo elemento a dibujar
      this.pieces.unshift({
        x: this.nextX,
        y: this.nextY,
      });
      // Elimina la cola
      this.pieces.pop();
    }
  }

  // Metodo para dibujar las piezas
  drawEnemy() {
    this.pieces.forEach((piece, i) => {
      ctx.fillStyle = (i === 0) ? '#5cb2ab' : this.bodyColor.rgb;
      ctx.fillRect(piece.x, piece.y, scale, scale);
      ctx.strokeStyle = '#a8eae5';
      ctx.strokeRect(piece.x, piece.y, scale, scale);
    });
  }

  // Determina los pasos para comer a snake
  lookForSnake(snake) {
    // Evalua si Snake esta a la derecha
    if (snake.pieces[0].x > this.pieces[0].x) {
      this.steps.push(DIRECTION_RIGTH);
    } else {
      this.steps.push(DIRECTION_LEFT);
    }

    // Evalua si Snake esta arriba o abajo
    if (snake.pieces[0].y > this.pieces[0].y) {
      this.steps.push(DIRECTION_DOWN);
    } else {
      this.steps.push(DIRECTION_UP);
    }
  }

  // Dejar solo la dirección mas corta
  setShortestStep(snake) {
    const step1X = (this.steps[0].x * scale) + this.pieces[0].x;
    const step1Y = (this.steps[0].y * scale) + this.pieces[0].y;

    const step2X = (this.steps[1].x * scale) + this.pieces[0].x;
    const step2Y = (this.steps[1].y * scale) + this.pieces[0].y;

    const distanceStep1 = Math.sqrt(((snake.pieces[0].x - step1X) ** 2) + ((snake.pieces[0].y - step1Y) ** 2));
    const distanceStep2 = Math.sqrt(((snake.pieces[0].x - step2X) ** 2) + ((snake.pieces[0].y - step2Y) ** 2));

    if (distanceStep1 > distanceStep2) {
      this.steps.splice(0, 1);
    } else {
      this.steps.pop();
    }
  }

  // Obtiene la siguiente posición en base al paso proximo.
  getNextPosition() {
    this.nextX = (this.steps[0].x * scale) + this.pieces[0].x;
    this.nextY = (this.steps[0].y * scale) + this.pieces[0].y;
  }
}
