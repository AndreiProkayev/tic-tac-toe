const cells = document.getElementsByClassName("cell");
const players = document.getElementsByClassName("player");

const rows = document.querySelector(".row");

let turn = "O";

players[0].classList.add("selected");

for (const cell of cells) {
  cell.addEventListener("click", () => {
    if (cell.textContent === "") {
      if (turn === "O") {
        turn = "X";
        players[1].classList.add("selected");
        players[0].classList.remove("selected");
      } else if (turn === "X") {
        turn = "O";
        players[0].classList.add("selected");
        players[1].classList.remove("selected");
      }
    }
    cell.textContent = turn;
  });
}

const winner = () => {};
