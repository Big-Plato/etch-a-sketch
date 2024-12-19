// "use strict";

const container = document.querySelector(".container");

const buttonPrompt = document.createElement("button");
const squareDiv = document.querySelector(".square-div")



container.appendChild(buttonPrompt);

buttonPrompt.setAttribute("style", "width: 200px;height: 50px; border-radius: 10px; background-color: yellow;")
buttonPrompt.textContent = "Set the number of squares";

let numberSquares;

buttonPrompt.addEventListener("click", () => {

    removeSquares();
    
    do {
        numberSquares = prompt("Set a number of squares");
    } while (numberSquares > 100 || numberSquares < 0)

    getSquares(numberSquares);

})



const getSquares = (numberSquares) => {
    for (let i = 0; i < numberSquares; i++) {
        let divSquare = document.createElement("div");
        divSquare.className = "square";
        console.log("div created");
        squareDiv.appendChild(divSquare);
        
    }
    


}

const removeSquares = () => {
    for (child of squareDiv.children) {
        child.remove();
    }
}