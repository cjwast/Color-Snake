/* eslint-disable no-undef */
canvas.width = canvasWidth;
canvas.height = canvasHeight;
colorCanvas.width = colorWidth;
colorCanvas.height = colorHeight;

const enemy = new Enemy();
const food = new Food();
let snake = new Snake();

// Funciones
function clearCanvas() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  colorCtx.clearRect(0, 0, colorWidth, colorHeight);
}

// Arroja una posicion acordé a la escala del board
function randomPosition() {
  const col = Math.floor(Math.random() * (canvasWidth / scale));
  const row = Math.floor(Math.random() * (canvasHeight / scale));
  return { x: scale * col, y: scale * row };
}

// Arroja un color aleatorio dentro del array de colores
function randomColor() {
  return colorArray[Math.floor(Math.random() * colorArray.length)];
}

function createSnake(position, color) {
  snake = new Snake(position.x, position.y, scale, scale, color);
}

// Validar las condiciones de game over
function isGameOver() {
  return (snake.x + snake.w >= canvasWidth
    || snake.y + snake.h >= canvasHeight
    || snake.x <= 0 || snake.y <= 0);
}

// Pantlla de game over
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
    // Establece los parametros para la comida
    foodPosition = randomPosition();
    foodColor = randomColor();
    // Establece los parametros para el enemigo
    enemyPosition = randomPosition();
    enemyColor = randomColor();
    enemy.setsPosition(enemyPosition.x, enemyPosition.y);
    enemy.setsColor(enemyColor);
    firstRun = false;
  }

  // Movimiento de snake y validacion si come o no
  const snakeResult = snake.keepMoving(food, enemy);
  if (snakeResult.eatsFood) {
    foodPosition = randomPosition();
    foodColor = randomColor();
    score += 1;
  }

  if (snakeResult.snakeEater.hitsEnemy) {
    enemyPosition = randomPosition();
    enemyColor = randomColor();
    enemy.setsPosition(enemyPosition.x, enemyPosition.y);
    enemy.setsColor(enemyColor);
    if (snakeResult.snakeEater.eatsEnemy) {
      score += 1;
    } else {
      createSnake(randomPosition(), randomColor());
      snake.lives -= 1;
    }
  }

  if (snakeResult.hitsWall) {
    createSnake(randomPosition(), randomColor());
    snake.lives -= 1;
  }

  food.appear(foodPosition.x, foodPosition.y, foodColor);

  if (enemy.keepMoving(snake)) {
    createSnake(randomPosition(), randomColor());
    snake.lives -= 1;
  }
  console.log(lives, score);
  snake.drawColors();
  frs += 1;
}

// Evento
function keyDownEvent(e) {
  // Direccion de snake
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
  } else if (e.keyCode === ARROW_UP) {
    snake.rollsColors('UP');
  } else if (e.keyCode === ARROW_DOWN) {
    snake.rollsColors('DOWN');
  } else if (e.keyCode === ARROW_RIGHT) {
    snake.setColor();
  }
}

// INICIO
onkeydown = keyDownEvent;
interval = setInterval(run, drawSpeed);
