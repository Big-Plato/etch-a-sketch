function etchSketch() {
  const squareOfDivs = document.querySelector(".square-div");
  const top = document.querySelector(".top")

  function defaultMove () {
    const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  });
  }

 // Initial grid 
 createGrid(16);
 defaultMove();
 // Buttons
 const buttonPrompt = document.createElement("button");
  buttonPrompt.classList.add("btn")
  buttonPrompt.textContent = "Number of squares";
  top.appendChild(buttonPrompt);
  
  const buttonRGB = document.createElement("button");
  buttonRGB.textContent = "Rainbow";
  buttonRGB.classList.add("rgb-btn");
  buttonRGB.classList.add("btn");
  top.appendChild(buttonRGB);

  const eraseBtn = document.createElement("button");
  eraseBtn.classList.add("btn");
  eraseBtn.textContent = "Erase";
  top.appendChild(eraseBtn);

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
    defaultMove();
  }

  // Button to make the grid
  buttonPrompt.addEventListener("click", () => {
    let gridSize;
    do {
      gridSize = parseInt(prompt("Enter grid size (1- 100): "));
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
  
  

}

etchSketch();
