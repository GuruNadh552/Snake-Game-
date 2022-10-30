let inputDirection = {x : 0 , y : 0};
let lastDirection = { x: 0, y: 0 };
window.addEventListener('keydown',(event)=>{
    console.log(lastDirection);
    switch (event.key) {
      case "ArrowUp":
        if(lastDirection.y!==0) break;
        inputDirection = { x: 0, y: -1 };
        break;
      case "ArrowDown":
        if(lastDirection.y!==0) break;
        inputDirection = { x: 0 , y: 1 };
        break;
      case "ArrowLeft":
        if(lastDirection.x!==0) break;
        inputDirection = { x: -1, y: 0 };
        break;
      case "ArrowRight":
        if(lastDirection.x!==0) break;
        inputDirection = { x: 1, y: 0 };
        break;
    }
})
export const getInputDirection = () => {
    lastDirection = inputDirection;
    return inputDirection;
}