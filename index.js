// "use strict";

const container = document.querySelector(".container");

const buttonPrompt = document.createElement("button");
const divSquare = document.createElement("div");


container.appendChild(buttonPrompt);

buttonPrompt.setAttribute("width: 200px;height: 50px;")
buttonPrompt.textContent = "Set the number of squares";

let numberSquares;

buttonPrompt.addEventListener("click", () => {
    do {
        numberSquares = prompt("Set a number of squares");
    } while (numberSquares > 100 || numberSquares < 0)

        getSquares(numberSquares);

})

const getSquares = (numberSquares) => {
    for (let i = 0; i < numberSquares; i++) {
        divSquare;
    }
}