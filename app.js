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

// Checking if one of the rows has 'X' in all cells
function checkVictoryOfAllRows() {
  for (const row of allRows) {
    const rowCells = row.getElementsByClassName("cell"); // cells of each row
    if (
      rowCells[0].textContent === "X" &&
      rowCells[1].textContent === "X" &&
      rowCells[2].textContent === "X"
    ) {
      alert("victory");
    }

    // תבדוק את התוכן של כל תא במערך - אם הוא איקס
  }
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

    // check victory of first row
    checkVictoryOfAllRows();
  });
}

/**
 * Homework
 * After you checked if each cell in row has X in it
 * Check if the cells have X or O
 * I mean, X X X or O O O
 *
 * Bonus:
 * Do it on a column (טור)
 * X
 * X
 * X
 */
