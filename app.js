const cells = document.querySelectorAll(".cell"); // all cell elements
const players = document.querySelectorAll(".player"); // all player elements
const allRows = document.querySelectorAll(".row"); // all row elements

let turn = "X"; // current turn

players[0].classList.add("selected"); // changing the first player element's color to salmon

// Changes turn from 'x' to 'o' and vice versa
function changeTurn() {
  if (turn === "O") {
    turn = "X";
    players[1].classList.add("selected"); // second player's color changes to salmon
    players[0].classList.remove("selected"); // first player's color changes back to gray
  } else if (turn === "X") {
    turn = "O";
    players[0].classList.add("selected"); // first player's color changes to salmon
    players[1].classList.remove("selected"); // second player's color changes back to gray
  }
}

// Checking victory of all rows
function checkRows() {
  for (const row of allRows) {
    const rowCells = row.getElementsByClassName("cell");
    const firstCell = rowCells[0].textContent;
    const secondCell = rowCells[1].textContent;
    const thirdCell = rowCells[2].textContent;

    if (firstCell === "" && secondCell === "" && thirdCell === "") {
      continue;
    }

    if (firstCell === secondCell && secondCell === thirdCell) {
      alert("victory!");
    }
  }
}

function checkColumn() {
  const allFirstColumnsCells = document.querySelectorAll(".firstCell");
  const allSecondColumnsCells = document.querySelectorAll(".secondCell");
  const allThirdColumsnCells = document.querySelectorAll(".thirdCell");
}

// loops over cell elements
for (const cell of cells) {
  // adds click event listener to each cell
  cell.addEventListener("click", () => {
    // if cell is empty
    if (cell.textContent === "") {
      // add turn symbol ('x' or 'o') to cell
      cell.textContent = turn;
      // and change turn
      changeTurn();
    }

    // check victory of all rows
    checkRows(), checkColumn();
  });
}
/**
 * Homework
 * - Check victory of columns
 *
 *  Hints:
 *  You can do it with a loop OR NOT!
 *
 * - After this, check slants
 */
