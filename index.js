function etchSketch() {
  const container = document.querySelector(".container");
  const buttonPrompt = document.createElement("button");
  const squareOfDivs = document.querySelector(".square-div");

  let i = 0;
  while (i < 32) {
    let divBase = document.createElement("div");
    divBase.className = "square";
    squareOfDivs.appendChild(divBase);
    i++;
  }

  container.appendChild(buttonPrompt);
  buttonPrompt.setAttribute(
    "style",
    "width: 200px; height: 50px; border-radius: 10px; background-color: yellow;"
  );
  buttonPrompt.textContent = "Set the number of squares";

  let numberSquares;

  function setOpacity() {
    this.setAttribute("style", "background-color: black;");
  }

  // Create the divs based on the input of user
  buttonPrompt.addEventListener("click", () => {
    // Asks the user for a number between 0 and 100
    do {
      numberSquares = prompt("Set a number of squares");
    } while (numberSquares > 100 || numberSquares < 0);

    numberSquares *= 2;
    getSquares(numberSquares);

    let selectedSquare = document.querySelectorAll(".square");
    select(selectedSquare);
  });

  function getSquares(numberSquares) {
    for (let i = 0; i < numberSquares + numberSquares; i++) {
      let divSquare = document.createElement("div");
      divSquare.className = "square";
      console.log("div created");
      squareOfDivs.appendChild(divSquare);
    }
  }

  

  function select (selectedSquare) {
  selectedSquare.forEach((square) => {
    square.addEventListener("mouseover", setOpacity);
  });
}

  const eraseBtn = document.createElement("button");
  container.appendChild(eraseBtn);
  eraseBtn.classList.add("btn");
  eraseBtn.textContent = "Erase";

  // The click remove by the number of squares divided by two only, so to clear it up the user have to click many times, I'll fix that somehow
  eraseBtn.addEventListener("click", () => {
    squareOfDivs.innerHTML = "";
  });
}

etchSketch();
