/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Enemy {
  constructor(id, sx, sy, color = colorArray[0]) {
    this.id = id;
    this.direction = DIRECTION_DOWN;
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

    // Se mueve a la velocidad definida por speed + la ventaja
    if (frs % (speed + ventaja) === 0) {
      // Obtiene la direccion a tomar mas corta
      this.direction = this.setShortestStep(snake);
      // Obtiene la siguiente posicion acorde la dirección
      this.getNextPosition();
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

  // Dejar solo la dirección mas corta
  setShortestStep(snake) {
    const nextPositions = this.getAllDirections();
    // Filtra solo las direcciones disponibles en el board y las que no lo tocan a si mismo
    const availablePosition = nextPositions.filter((position) => {
      if (position.x > 0 - scale && position.x < canvasWidth
        && position.y > 0 - scale && position.y < canvasHeight) {
        const aux = this.pieces.filter(piece => piece.x === position.x && piece.y === position.y);
        return aux.length === 0;
      }
      return false;
    });

    // Obtiene la menor distancia de las posibles direcciones a snake
    const distanceToSnake = availablePosition.map((position) => {
      const arrayDistances = snake.pieces.map(piece => ({
        direction: position.direction,
        distance: Math.sqrt(((piece.x - position.x) ** 2) + ((piece.y - position.y) ** 2)),
      }));
      arrayDistances.sort((a, b) => a.distance - b.distance);
      return arrayDistances[0];
    });

    // Ordena las distancias
    distanceToSnake.sort((a, b) => a.distance - b.distance);
    return distanceToSnake[0].direction;
  }

  // Obtiene la siguiente posición en base al paso proximo.
  getNextPosition() {
    this.nextX = (this.direction.x * scale) + this.pieces[0].x;
    this.nextY = (this.direction.y * scale) + this.pieces[0].y;
  }

  // Calcula la siguiente posicion en todas las direcciones
  getAllDirections() {
    const nextPositions = [];

    nextPositions.push({
      x: (DIRECTION_DOWN.x * scale) + this.pieces[0].x,
      y: (DIRECTION_DOWN.y * scale) + this.pieces[0].y,
      direction: DIRECTION_DOWN,
    });

    nextPositions.push({
      x: (DIRECTION_UP.x * scale) + this.pieces[0].x,
      y: (DIRECTION_UP.y * scale) + this.pieces[0].y,
      direction: DIRECTION_UP,
    });

    nextPositions.push({
      x: (DIRECTION_LEFT.x * scale) + this.pieces[0].x,
      y: (DIRECTION_LEFT.y * scale) + this.pieces[0].y,
      direction: DIRECTION_LEFT,
    });

    nextPositions.push({
      x: (DIRECTION_RIGTH.x * scale) + this.pieces[0].x,
      y: (DIRECTION_RIGTH.y * scale) + this.pieces[0].y,
      direction: DIRECTION_RIGTH,
    });

    return nextPositions;
  }
}
