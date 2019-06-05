/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const scale = 100;
const drawSpeed = 1000 / 240;
const canvasWidth = 1000;
const canvasHeight = 1000;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const backGroundCanvas = '#344259';
const snakeColor = '#24e561';
const startingPointY = Math.floor(scale * ((canvasHeight / scale) / 2));
const startingPointX = Math.floor(scale * ((canvasWidth / scale) / 2));

let baseSpeed = 20;
let interval = 0;
let frs = 0;
