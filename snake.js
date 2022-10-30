import {getInputDirection} from './input.js';
const snakeCordinates = [
  { x: 11, y: 11 }
];
let newSegements = 0;

export const SNAKE_SPEED = 2;
export const update = () => {
    addSegements();
    const inputDirection = getInputDirection();
    for(let i=snakeCordinates.length-2;i>=0;i--){
        snakeCordinates[ i + 1 ] = {...snakeCordinates[i]}
    }
    snakeCordinates[0].x += inputDirection.x;
    snakeCordinates[0].y += inputDirection.y;
}

export const draw = (gameBoard) => {
    snakeCordinates.forEach((segement)=>{
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segement.y;
        snakeElement.style.gridColumnStart = segement.x;
        snakeElement.classList.add('snake');
        gameBoard.append(snakeElement);
    })
}

export const expandSnake = (amount) => {
    newSegements += amount;
}

export const onSnake = (position,isHead = false) => {
    return snakeCordinates.some((segement,$index)=>{
        if(isHead && $index===0) return false;
        return segement.x === position.x && segement.y === position.y;
    })
}

function addSegements(){
    for (let i=0;i<newSegements;i++){
        snakeCordinates.push(
            {
                ...snakeCordinates[snakeCordinates.length - 1]
            }
        )
    }
    newSegements = 0;
}

export const getCurrentSnakePosition = () => {
    return snakeCordinates[0];
}

export const isCollide = () => {
    return onSnake(snakeCordinates[0],true)
}