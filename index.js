import {
  update as updateSnake,
  draw as drawSnake,
  getCurrentSnakePosition,
  isCollide,
  SNAKE_SPEED,
} from "./snake.js";
import {
  update as updateFood,
  draw as drawFood,
} from "./food.js";
let gameBoard = document.getElementById("game-board");
let lastRenderTime = 0;
let gameOver = false;
const main = (currentTime) => {
  if(gameOver){
    alert("You Lost Press Ok to Start!!!");
    window.location = '/';
    return;
  }
  window.requestAnimationFrame(main);
  const secondSinceLast = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLast < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  updateSnake();
  updateFood();
  checkDeath();
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
};
window.requestAnimationFrame(main);

function checkDeath(){
    if(isOutsideGrid(getCurrentSnakePosition()) || isCollide())
        gameOver = true;
}

function isOutsideGrid(position) {
  return position.x < 1 || position.x > 21 || position.y < 1 || position.y > 21;
}


