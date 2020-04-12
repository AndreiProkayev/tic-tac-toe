const cells = document.getElementsByClassName("cell"); // [התאים שלנו]
const players = document.getElementsByClassName("player"); // [השחקנים שלמעלה - איקס ועיגול]

let turn = "X"; // התור הנוכחי 

players[0].classList.add("selected"); // הצבע של הפלייר הראשון מתחלף לכתום

for (const cell of cells) { // לופ על התאים
  cell.addEventListener("click", () => { // מוסיף קליק איבנט על כל תא
    if (cell.textContent === "") { // אם התא ריק
      cell.textContent = turn; // הטקסט של התא הוא התור
      if (turn === "O") { // אם התור הוא עיגול
        turn = "X"; // התור הופך להיות איקס
        players[1].classList.add("selected"); // הצבע של הפלייר השני מתחלף לכתום
        players[0].classList.remove("selected"); // הצבע של הפלייר הראשון חוזר לאפור
      } else if (turn === "X") { // אחרת אם התור הוא איקס
        turn = "O"; // התור הופך להיות עיגול
        players[0].classList.add("selected"); // הצבע של הפלייר הראשון מתחלף לכתום
        players[1].classList.remove("selected"); // הצבע של הפלייר השני מתחלף לאפור
      }
    }
  });
}