/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const scale = 15;
const canvasWidth = 300;
const canvasHeight = 300;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const backGroundCanvas = '#344259';
const snakeColor = '#24e561';
const startingPointX = Math.floor((canvasHeight) / 2);
const startingPointY = Math.floor((canvasWidth) / 2);

let baseSpeedX = 1;
let baseSpeedY = 1;
let interval = 0;
