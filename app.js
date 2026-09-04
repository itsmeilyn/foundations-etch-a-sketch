const container = document.querySelector(".container");

// create 16x16 divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid");
  container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");

for (let grid of grids) {
  grid.addEventListener("click", () => console.log("clicked"));
}
