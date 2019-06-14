/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

// Clases auxiliares
class Direction {
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

// Constantes para el control de colores
const colorScale = 40;
const colorWidth = 260;
const colorHeight = 240;
const colorFont = '35px News Cycle';
const colorCanvas = document.getElementById('color');
const colorCtx = colorCanvas.getContext('2d', {
  desynchronized: true,
  preserveDrawingBuffer: true,
});


const backGroundCanvas = '#000F08';
const snakeColor = '#24e561';
const startingPointY = Math.floor(scale * ((canvasHeight / scale) / 2));
const startingPointX = Math.floor(scale * ((canvasWidth / scale) / 2));
const speedCoefficient = 100;


// Constantes de referencia de dirección
const DIRECTION_UP = new Direction(0, -1);
const DIRECTION_LEFT = new Direction(-1, 0);
const DIRECTION_DOWN = new Direction(0, 1);
const DIRECTION_RIGTH = new Direction(1, 0);

// Arreglo de colores de las frutas
const colorArray = [
  { name: 'Blue Ruin', rgb: '#0D3B66' },
  { name: 'Red Menace', rgb: '#EF476F' },
  { name: 'Yellow Fever', rgb: '#FFD575' },
  { name: 'Green Revolution', rgb: '#5AFF15' },
];

// key codes
const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;
const SPACEBAR = 32;
const W = 87;
const A = 65;
const D = 68;
const S = 83;

// Variables de gameplay
let speed = 30; // menor el numero, mayor la velocidad
let interval = 0;
let frs = 0;
