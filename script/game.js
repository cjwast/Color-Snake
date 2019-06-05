/* eslint-disable no-undef */
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const snake = new Snake();
const food = new Food();

// Funciones

function drawCanvas() {
  ctx.fillStyle = backGroundCanvas;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function randomBoard(top = 0) {
  return Math.floor(Math.random() * (top / scale));
}

function createFood() {
  const x = scale * randomBoard(canvasWidth);
  const y = scale * randomBoard(canvasHeight);
  food.appear(x, y);
}

function run() {
  drawCanvas();
  snake.keepMoving();
  frs += 1;
}

function keyDownEvent(e) {
  switch (e.keyCode) {
    case 38:
      snake.speedX = 0;
      snake.speedY = -1;
      break;
    case 40:
      snake.speedX = 0;
      snake.speedY = 1;
      break;
    case 37:
      snake.speedX = -1;
      snake.speedY = 0;
      break;
    case 39:
      snake.speedX = 1;
      snake.speedY = 0;
      break;
    case 32:
      if (interval !== 0) {
        clearInterval(interval);
        interval = 0;
      } else {
        interval = setInterval(run, drawSpeed);
      }

      createFood();
      break;
    default:
      snake.speedX = snake.speedX;
      snake.speedY = snake.speedY;
      break;
  }
}

// Eventos

onkeydown = keyDownEvent;
interval = setInterval(run, drawSpeed);
