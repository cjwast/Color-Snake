/* eslint-disable no-undef */
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const snake = new Snake();
const food = new Food();
let firstRun = true;
let foodPosition = { x: 0, y: 0 };
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
  return { x, y };
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
    snake.tailLength += 1;
  }
  food.appear(foodPosition.x, foodPosition.y);
  snake.keepMoving();
  frs += 1;
}

function keyDownEvent(e) {
  switch (e.keyCode) {
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
