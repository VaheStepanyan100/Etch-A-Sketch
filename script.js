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
