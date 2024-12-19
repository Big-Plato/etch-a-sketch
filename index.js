// "use strict";

const container = document.querySelector(".container");
const buttonPrompt = document.createElement("button");
const squareOfDivs = document.querySelector(".square-div");

container.appendChild(buttonPrompt);
buttonPrompt.setAttribute(
  "style",
  "width: 200px;height: 50px; border-radius: 10px; background-color: yellow;"
);
buttonPrompt.textContent = "Set the number of squares";

let numberSquares;



// Create the divs based on the input of user
buttonPrompt.addEventListener("click", () => {
  // Does not function well yet, but this is to clear the divs created by user input and if he clicks the squares are created based on the new input

  // Asks the user for a number between 0 and 100
  do {
    numberSquares = prompt("Set a number of squares");
  } while (numberSquares > 100 || numberSquares < 0);

  getSquares(numberSquares);
});

function getSquares(numberSquares) {
  for (let i = 0; i < numberSquares; i++) {
    let divSquare = document.createElement("div");
    divSquare.className = "square";
    console.log("div created");
    squareOfDivs.appendChild(divSquare);
  }
}

const eraseBtn = document.createElement("button");
container.appendChild(eraseBtn);
eraseBtn.classList.add("btn");
eraseBtn.textContent = "Erase";

// The click remove by the number of squares divided by two only, so to clear it up the user have to click many times, I'll fix that somehow
eraseBtn.addEventListener("click", () => {
    for (child of squareOfDivs.children) {
        child.remove();
    }
});


