/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

// Clases auxiliares
class Direction {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

// Constantes de dibujo del tablero
const scale = 20;
const drawSpeed = 1000 / 240; // 100 / 60 son 60 cuados por segundo
const canvasWidth = scale * 30;
const canvasHeight = scale * 20;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d', {
  desynchronized: true,
  preserveDrawingBuffer: true,
});

const backGroundCanvas = '#344259';
const snakeColor = '#24e561';
const startingPointY = Math.floor(scale * ((canvasHeight / scale) / 2));
const startingPointX = Math.floor(scale * ((canvasWidth / scale) / 2));

// Constantes de referencia de dirección
const DIRECTION_UP = new Direction(0, -1);
const DIRECTION_LEFT = new Direction(-1, 0);
const DIRECTION_DOWN = new Direction(0, 1);
const DIRECTION_RIGTH = new Direction(1, 0);

// Arrow up
const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;
const SPACEBAR = 32;


// Variables de gameplay
let speed = 20; // menor el numero, mayor la velocidad
let interval = 0;
let frs = 0;
