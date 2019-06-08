/* eslint-disable no-undef */
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const snake = new Snake();
const food = new Food();
let firstRun = true;
let foodPosition = new Position();
let gameOver = false;

// Funciones
function drawCanvas() {
  ctx.fillStyle = backGroundCanvas;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function randomBoard(top = 0) {
  return Math.floor(Math.random() * (top / scale));
}

function randomPosition() {
  const x = scale * randomBoard(canvasWidth);
  const y = scale * randomBoard(canvasHeight);
  return new Position(x, y);
}

// Validar las condiciones de game over
function isGameOver() {
  if (snake.x + snake.w >= canvasWidth || snake.y + snake.h >= canvasHeight || snake.x <= 0 || snake.y <= 0) {
    gameOver = true;
  } else {
    gameOver = false;
  }
  return gameOver;
}

function showGameOverScreen() {
  // TODO: desarrollar la pantalla de game over, un posible popup modal
  if (interval !== 0) {
    clearInterval(interval);
    interval = 0;
  }
}

function run() {
  if (isGameOver()) {
    showGameOverScreen();
  }

  drawCanvas();
  if (firstRun) {
    foodPosition = randomPosition();
    firstRun = false;
  }
  if (snake.eats(food)) {
    foodPosition = randomPosition();

    snake.increaseTail();
  }
  food.appear(foodPosition);
  snake.keepMoving();
  frs += 1;
}

function keyDownEvent(e) {
  switch (e.keyCode) {
    // Arrow up
    case ARROW_UP:
      snake.direction = DIRECTION_UP;
      break;
    // Arrow down
    case ARROW_DOWN:
      snake.direction = DIRECTION_DOWN;
      break;
    // Arrow left
    case ARROW_LEFT:
      snake.direction = DIRECTION_LEFT;
      break;
    // Arrow right
    case ARROW_RIGHT:
      snake.direction = DIRECTION_RIGTH;
      break;
    // Spacebar
    case SPACEBAR:
      if (interval !== 0) {
        clearInterval(interval);
        interval = 0;
      } else {
        interval = setInterval(run, drawSpeed);
      }
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
