/* eslint-disable no-undef */
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const snake = new Snake();
const food = new Food();
let foodPosition = { x: 0, y: 0 };
let foodColor = colorArray[0];
let firstRun = true;
let score = 0;

// Funciones
function clearCanvas() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function randomPosition() {
  const col = Math.floor(Math.random() * (canvasWidth / scale));
  const row = Math.floor(Math.random() * (canvasHeight / scale));
  return { x: scale * col, y: scale * row };
}

function randomColor() {
  return colorArray[Math.floor(Math.random() * colorArray.length)];
}

// Validar las condiciones de game over
function isGameOver() {
  return (snake.x + snake.w >= canvasWidth
    || snake.y + snake.h >= canvasHeight
    || snake.x <= 0 || snake.y <= 0);
}

function showGameOverScreen() {
  // TODO: desarrollar la pantalla de game over, un posible popup modal
  if (interval !== 0) {
    clearInterval(interval);
    interval = 0;
  }
}

// Funcion principal
function run() {
  if (isGameOver()) {
    showGameOverScreen();
  }

  clearCanvas();
  if (firstRun) {
    foodPosition = randomPosition();
    foodColor = randomColor();
    firstRun = false;
  }
  if (snake.keepMoving(food)) {
    foodPosition = randomPosition();
    foodColor = randomColor();
    score += 1;
  }
  food.appear(foodPosition.x, foodPosition.y, foodColor);
  frs += 1;
}

// Evento
function keyDownEvent(e) {
  if (e.keyCode === W && snake.direction !== DIRECTION_DOWN) {
    snake.direction = DIRECTION_UP;
  } else if (e.keyCode === S && snake.direction !== DIRECTION_UP) {
    snake.direction = DIRECTION_DOWN;
  } else if (e.keyCode === A && snake.direction !== DIRECTION_RIGTH) {
    snake.direction = DIRECTION_LEFT;
  } else if (e.keyCode === D && snake.direction !== DIRECTION_LEFT) {
    snake.direction = DIRECTION_RIGTH;
  } else if (e.keyCode === SPACEBAR) {
    if (interval !== 0) {
      clearInterval(interval);
      interval = 0;
    } else {
      interval = setInterval(run, drawSpeed);
    }
  }
}

// INICIO
onkeydown = keyDownEvent;
interval = setInterval(run, drawSpeed);
