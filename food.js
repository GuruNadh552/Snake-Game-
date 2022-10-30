let food = {x : 5,y : 5};
const EXPANSION_RATE = 1;
import { onSnake,expandSnake } from "./snake.js";
export const draw = (gameBoard) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.append(foodElement);
};

export const update = () => {
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
};

function getRandomFoodPosition(){
    let newPosition;
    while(newPosition==null || onSnake(newPosition)){
        newPosition = {
           x :  ~~(Math.random() * 21) + 1,
           y : ~~(Math.random() * 21) +1
        }
    }
    return newPosition;
}
