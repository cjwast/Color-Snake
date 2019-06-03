/* eslint-disable no-undef */
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const snake = new Snake();

function drawCanvas() {
  ctx.fillStyle = backGroundCanvas;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function run() {
  drawCanvas();
  snake.keepMoving();
}

function keys(e) {
  switch (e.keyCode) {
    case 38:
      snake.speedX = 0;
      snake.speedY = baseSpeedY * -1;
      break;
    case 40:
      snake.speedX = 0;
      snake.speedY = baseSpeedY;
      break;
    case 37:
      snake.speedX = baseSpeedX * -1;
      snake.speedY = 0;
      break;
    case 39:
      snake.speedX = baseSpeedX * 1;
      snake.speedY = 0;
      break;
    case 32:
      if (interval !== 0) {
        clearInterval(interval);
        interval = 0;
      } else {
        interval = setInterval(run, 1000 / 60);
      }
      break;
    default:
      snake.speedX = snake.speedX;
      snake.speedY = snake.speedY;
      break;
  }
}

onkeydown = keys;
interval = setInterval(run, 1000 / 60);
