const grid = document.querySelector(".container");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.className = "square";
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.appendChild(div);
  }
  return grid;
}

createGrid(16);

function changeBoxColor(gridBoxes) {
  gridBoxes.forEach((box) => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let r1 = r;
    let g2 = g;
    let b3 = b;
    box.addEventListener("mouseover", () => {
      let color = `rgb(${r}, ${g}, ${b})`;

      if (r > 0 || g > 0 || b || 0) {
        r -= (r1 * 10) / 100;
        g -= (g2 * 10) / 100;
        b -= (b3 * 10) / 100;
      }

      box.style.backgroundColor = color;
    });
  });
}

let gridBoxes = document.querySelectorAll(".square");

changeBoxColor(gridBoxes);

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let size = prompt("Enter Grid size less then or equal to 100");
  while (size > 100) {
    size = prompt("Enter Grid size less then or equal to 100");
  }
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  createGrid(size);
  let gridBoxes = document.querySelectorAll(".square");

  changeBoxColor(gridBoxes);
});
