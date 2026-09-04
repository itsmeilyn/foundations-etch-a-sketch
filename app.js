const container = document.querySelector(".container");

// create 16x16 divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid");
  container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");

for (let grid of grids) {
  grid.addEventListener(
    "mouseenter",
    () => (grid.style.backgroundColor = generateRandColors()),
  );
}

function generateRandColors() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);

  return `rgb(${R}, ${G}, ${B})`;
}
