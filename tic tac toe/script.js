const X_CLASS = "x";
const O_CLASS = "o";
const board = document.querySelector(".container");
const winBoard = document.querySelector(".win");
const whoWins = document.querySelector(".win-text");
const winResetButton = document.querySelector(".reset-win");
let xTurn;
let markWindow = document.querySelectorAll(".element");

winResetButton.addEventListener("click", function () {
  window.location.reload();
});

const WIN = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

markWindow.forEach((addElement) =>
  addElement.addEventListener("click", function () {
    const actualClass = xTurn ? O_CLASS : X_CLASS;
    const cell = addElement;

    addMark(cell, actualClass);
    if (checkWin(actualClass)) {
      board.style.display = "none";
      winBoard.style.display = "grid";
      whoWins.innerText = `${actualClass.toUpperCase()} Wins`;
    }
    switchTurn();
  })
);

function switchTurn() {
  xTurn = !xTurn;
}

function addMark(cell, actualClass) {
  cell.classList.add(actualClass);
}

function checkWin(actualClass) {
  return WIN.some((element) => {
    return element.every((index) => {
      return markWindow[index].classList.contains(actualClass);
    });
  });
}
