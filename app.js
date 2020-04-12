const cells = document.getElementsByClassName("cell"); // [התאים שלנו]
const players = document.getElementsByClassName("player"); // [השחקנים שלמעלה - איקס ועיגול]

const firstRow = document.querySelector(".row"); // השורה הראשונה
const firstRowCells = firstRow.getElementsByClassName("cell"); // התאים של השורה הראשונה

let turn = "X"; // התור הנוכחי

players[0].classList.add("selected"); // הצבע של הפלייר הראשון מתחלף לכתום

function changeTurn() {
  if (turn === "O") {
    // אם התור הוא עיגול
    turn = "X"; // התור הופך להיות איקס
    players[1].classList.add("selected"); // הצבע של הפלייר השני מתחלף לכתום
    players[0].classList.remove("selected"); // הצבע של הפלייר הראשון חוזר לאפור
  } else if (turn === "X") {
    // אחרת אם התור הוא איקס
    turn = "O"; // התור הופך להיות עיגול
    players[0].classList.add("selected"); // הצבע של הפלייר הראשון מתחלף לכתום
    players[1].classList.remove("selected"); // הצבע של הפלייר השני מתחלף לאפור
  }
}

function checkVictoryOfFirstRow() {
  if (
    firstRowCells[0].textContent === "X" &&
    firstRowCells[1].textContent === "X" &&
    firstRowCells[2].textContent === "X"
  ) {
    alert("Victory!!!!");
  }
}

for (const cell of cells) {
  // לופ על התאים
  cell.addEventListener("click", () => {
    // מוסיף קליק איבנט על כל תא
    if (cell.textContent === "") {
      // אם התא ריק
      cell.textContent = turn; // הטקסט של התא הוא התור
      changeTurn();
    }

    checkVictoryOfFirstRow();
  });
}

/**
 * שיעורי בית
 * לבדוק את התאים בכל השורות
 * האם יש בהם איקס
 *
 * אתה צריך לקבל את כל השורות
 * להבין האם בתאים שלהם יש איקס
 * ואם באחת מהן יש איקס בכל התאים
 * לעשות אלרט
 *
 * loop
 * if()
 */
