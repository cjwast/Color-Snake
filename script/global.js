/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

// Clases auxiliares
class Direction {
  constructor(x, y) {
    this.x = 0;
    this.y = 0;
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
    case 38:
snake.direction = DIRECTION_UP;
break;
    // Arrow down
    case 40:
snake.speedX = 0;
snake.speedY = 1;
break;
    // Arrow left
    case 37:
snake.speedX = -1;
snake.speedY = 0;
break;
    // Arrow right
    case 39:
snake.speedX = 1;
snake.speedY = 0;
break;
    // Spacebar
    case 32:

// Variables de gameplay
let baseSpeed = 20; // menor el numero, mayo la velocidad
let interval = 0;
let frs = 0;
