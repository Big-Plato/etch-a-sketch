function etchSketch() {
  const container = document.querySelector(".container");
  const squareOfDivs = document.querySelector(".square-div");


 // Initial grid 
 createGrid(16);

 // Buttons
 const buttonPrompt = document.createElement("button");
  buttonPrompt.style.cssText = "width: 100px; height: 50px; border-radius: 10px; background-color: yellow;";
  buttonPrompt.textContent = "Number of squares";
  container.appendChild(buttonPrompt);
  
  const buttonRGB = document.createElement("button");
  buttonRGB.textContent = "Rainbow";
  buttonRGB.classList.add("rgb-btn");
  container.appendChild(buttonRGB);

  const eraseBtn = document.createElement("button");
  eraseBtn.classList.add("btn");
  eraseBtn.textContent = "Erase";
  container.appendChild(eraseBtn);

  //Function to create the random color
  const getRandomColour = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  // Function that produces the divs squares, with grid now
  function createGrid(size) {
    squareOfDivs.innerHTML = "";
    squareOfDivs.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    squareOfDivs.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      squareOfDivs.appendChild(div);
    }
  }

  // Button to make the grid
  buttonPrompt.addEventListener("click", () => {
    let gridSize;
    do {
      gridSize = parseInt(prompt("Enter grid size (1- 100:"));
    } while (gridSize < 1 || gridSize > 100);

    createGrid(gridSize);
  })

  // Button RGB click
  buttonRGB.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomColour();
      });
    });
  })

  // Now the erase button just turn the background color to white
  eraseBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.style.backgroundColor = "white"
    })
  });
  
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  });

}

etchSketch();
