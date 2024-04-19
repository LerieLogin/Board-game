const board = document.createElement("div");
const main = document.getElementById("container");
const btn = document.getElementById("submit-score");
let isWhiteTurn = true;
let lastPlacedPiece = null;
let lastPlacedSquare = null;
let clickedSquare = null;
let clickedPiece = null;

board.classList.add("board");

function makeBoard() {
  const board = document.createElement("div");
  board.classList.add("board");

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const boardSquare = document.createElement("div");
      boardSquare.classList.add("board-square");
      boardSquare.id = `square-${row}-${col}`;
      boardSquare.addEventListener("click", function (event) {
        event.preventDefault();
        const squareId = this.id;
        const pieceContainer = this;
        
        clickedPiece = this.querySelector(".white-piece") || this.querySelector(".black-piece");
        if (isWhiteTurn) {
          console.log("white turn");
          if (pieceContainer.children.length === 0) {
            const whitePiece = document.createElement("div");
            whitePiece.classList.add("white-piece");
            pieceContainer.appendChild(whitePiece);
            lastPlacedPiece = whitePiece;
            lastPlacedSquare = pieceContainer;
            fourRowCheck();
            console.log("Piece placed on square:", squareId);
            isWhiteTurn = !isWhiteTurn;
          } else if (boardSquare.querySelector(".white-piece")) {
            console.log("There is already a piece there.");
            capturePiece(this);
            
            return;
          }
        } else {
          console.log("black turn");
          if (pieceContainer.children.length === 0) {
            const blackPiece = document.createElement("div");
            blackPiece.classList.add("black-piece");
            pieceContainer.appendChild(blackPiece);
            lastPlacedPiece = blackPiece;
            lastPlacedSquare = pieceContainer;
            fourRowCheck();
            console.log("Piece placed on square:", squareId);
            isWhiteTurn = !isWhiteTurn;
          } else if (boardSquare.querySelector(".black-piece")) {
            console.log("There is already a piece there.");
            capturePiece(this);
            
            return;
          }
        }
      });

      board.appendChild(boardSquare);
    }
    main.appendChild(board);
  }
}

makeBoard();

function capturePiece(clickedSquare) {
  console.log(clickedSquare);

  // Reset background color of all squares
  const squares = document.querySelectorAll('.board-square');
  // squares.forEach(square => square.style.backgroundColor = '');

  // Highlight the clicked square
  clickedSquare.style.backgroundColor = 'yellow';

  // Find the clicked piece
  const clickedPiece = clickedSquare.querySelector('.white-piece, .black-piece');
  if (!clickedPiece) return; // Exit if no piece is clicked

  // Get the color of the clicked piece
  const pieceColor = clickedPiece.classList.contains('white-piece') ? 'white' : 'black';

  // Iterate through neighboring squares to check for capture options
  const row = parseInt(clickedSquare.id.split('-')[1]);
  const col = parseInt(clickedSquare.id.split('-')[2]);

  // Check horizontally
  checkCaptureOption(row, col, 0, 1, pieceColor); // Right direction
  checkCaptureOption(row, col, 0, -1, pieceColor); // Left direction

  // Check vertically
  checkCaptureOption(row, col, 1, 0, pieceColor); // Down direction
  checkCaptureOption(row, col, -1, 0, pieceColor); // Up direction
}

function checkCaptureOption(row, col, rowDir, colDir, pieceColor) {
  let square1 = document.getElementById(`square-${row}-${col}`);
  let square2 = document.getElementById(`square-${row + rowDir}-${col + colDir}`);
  let square3 = document.getElementById(`square-${row + 2 * rowDir}-${col + 2 * colDir}`);

  if (square1 && square2 && square3) {
    let piece1 = square1.querySelector('.black-piece, .white-piece');
    let piece2 = square2.querySelector('.black-piece, .white-piece');
    let piece3 = square3.querySelector('.black-piece, .white-piece');

    if (piece1 && piece2 && !piece3 && piece2.classList.contains(pieceColor === 'white' ? 'black-piece' : 'white-piece')) {
      // Highlight the third square as a capture option
      square3.style.backgroundColor = "red"
      console.log(square1, square2, square3)
      square3.addEventListener("click", function (event) {
        event.preventDefault();
        const squareId = this.id;
        const pieceContainer = this;
      
        if (this.style.backgroundColor === 'red') {
          square3.appendChild(piece1);
          square2.removeChild(piece2);
      
          resetBackgroundColors();
          squareCheck()
          
        }
      });
      
    
    }
  }
}

// TODO having an issue with piece capture check assets folder for a video

function resetBackgroundColors() {
  const squares = document.querySelectorAll('.board-square');
  squares.forEach(square => square.style.backgroundColor = '');
}


function squareCheck() {
  const squares = document.querySelectorAll('.board-square')
  squares.forEach(square => {
    while (square.children.length > 1) {
      square.removeChild(square.firstChild);
    }
  });
}



function fourRowCheck() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square1 = document.getElementById(`square-${row}-${col}`);
      const square2 = document.getElementById(`square-${row}-${col - 1}`);
      const square3 = document.getElementById(`square-${row}-${col - 2}`);
      const square4 = document.getElementById(`square-${row}-${col - 3}`);

      if (square1 && square2 && square3 && square4) {
        const piece1 = square1.querySelector(".black-piece")
          ? "black"
          : square1.querySelector(".white-piece")
          ? "white"
          : null;
        const piece2 = square2.querySelector(".black-piece")
          ? "black"
          : square2.querySelector(".white-piece")
          ? "white"
          : null;
        const piece3 = square3.querySelector(".black-piece")
          ? "black"
          : square3.querySelector(".white-piece")
          ? "white"
          : null;
        const piece4 = square4.querySelector(".black-piece")
          ? "black"
          : square4.querySelector(".white-piece")
          ? "white"
          : null;

        //make if block

        if (
          piece1 &&
          piece2 &&
          piece3 &&
          piece4 &&
          piece1 === piece2 &&
          piece2 === piece3 &&
          piece3 === piece4
        ) {
          console.log("four in a row");
          lastPlacedSquare.removeChild(lastPlacedPiece);
          isWhiteTurn = !isWhiteTurn; // Toggle the turn
          return;
        }
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square1 = document.getElementById(`square-${row}-${col}`);
      const square2 = document.getElementById(`square-${row}-${col}`);
      const square3 = document.getElementById(`square-${row}-${col + 2}`);
      const square4 = document.getElementById(`square-${row}-${col + 3}`);

      if (square1 && square2 && square3 && square4) {
        const piece1 = square1.querySelector(".black-piece")
          ? "black"
          : square1.querySelector(".white-piece")
          ? "white"
          : null;
        const piece2 = square2.querySelector(".black-piece")
          ? "black"
          : square2.querySelector(".white-piece")
          ? "white"
          : null;
        const piece3 = square3.querySelector(".black-piece")
          ? "black"
          : square3.querySelector(".white-piece")
          ? "white"
          : null;
        const piece4 = square4.querySelector(".black-piece")
          ? "black"
          : square4.querySelector(".white-piece")
          ? "white"
          : null;

        //make if block

        if (
          piece1 &&
          piece2 &&
          piece3 &&
          piece4 &&
          piece1 === piece2 &&
          piece2 === piece3 &&
          piece3 === piece4
        ) {
          console.log("four in a row");
          lastPlacedSquare.removeChild(lastPlacedPiece);
          isWhiteTurn = !isWhiteTurn; // Toggle the turn
          return;
        }
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square1 = document.getElementById(`square-${row}-${col}`);
      const square2 = document.getElementById(`square-${row + 1}-${col}`);
      const square3 = document.getElementById(`square-${row + 2}-${col}`);
      const square4 = document.getElementById(`square-${row + 3}-${col}`);

      if (square1 && square2 && square3 && square4) {
        const piece1 = square1.querySelector(".black-piece")
          ? "black"
          : square1.querySelector(".white-piece")
          ? "white"
          : null;
        const piece2 = square2.querySelector(".black-piece")
          ? "black"
          : square2.querySelector(".white-piece")
          ? "white"
          : null;
        const piece3 = square3.querySelector(".black-piece")
          ? "black"
          : square3.querySelector(".white-piece")
          ? "white"
          : null;
        const piece4 = square4.querySelector(".black-piece")
          ? "black"
          : square4.querySelector(".white-piece")
          ? "white"
          : null;

        //make if block

        if (
          piece1 &&
          piece2 &&
          piece3 &&
          piece4 &&
          piece1 === piece2 &&
          piece2 === piece3 &&
          piece3 === piece4
        ) {
          console.log("four in a row");
          lastPlacedSquare.removeChild(lastPlacedPiece);
          isWhiteTurn = !isWhiteTurn; // Toggle the turn
          return;
        }
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square1 = document.getElementById(`square-${row}-${col}`);
      const square2 = document.getElementById(`square-${row + 1}-${col + 1}`);
      const square3 = document.getElementById(`square-${row + 2}-${col + 2}`);
      const square4 = document.getElementById(`square-${row + 3}-${col + 3}`);

      if (square1 && square2 && square3 && square4) {
        const piece1 = square1.querySelector(".black-piece")
          ? "black"
          : square1.querySelector(".white-piece")
          ? "white"
          : null;
        const piece2 = square2.querySelector(".black-piece")
          ? "black"
          : square2.querySelector(".white-piece")
          ? "white"
          : null;
        const piece3 = square3.querySelector(".black-piece")
          ? "black"
          : square3.querySelector(".white-piece")
          ? "white"
          : null;
        const piece4 = square4.querySelector(".black-piece")
          ? "black"
          : square4.querySelector(".white-piece")
          ? "white"
          : null;

        //make if block

        if (
          piece1 &&
          piece2 &&
          piece3 &&
          piece4 &&
          piece1 === piece2 &&
          piece2 === piece3 &&
          piece3 === piece4
        ) {
          console.log("four in a row");
          lastPlacedSquare.removeChild(lastPlacedPiece);
          isWhiteTurn = !isWhiteTurn; // Toggle the turn
          return;
        }
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square1 = document.getElementById(`square-${row}-${col}`);
      const square2 = document.getElementById(`square-${row + 1}-${col - 1}`);
      const square3 = document.getElementById(`square-${row + 2}-${col - 2}`);
      const square4 = document.getElementById(`square-${row + 3}-${col - 3}`);

      if (square1 && square2 && square3 && square4) {
        const piece1 = square1.querySelector(".black-piece")
          ? "black"
          : square1.querySelector(".white-piece")
          ? "white"
          : null;
        const piece2 = square2.querySelector(".black-piece")
          ? "black"
          : square2.querySelector(".white-piece")
          ? "white"
          : null;
        const piece3 = square3.querySelector(".black-piece")
          ? "black"
          : square3.querySelector(".white-piece")
          ? "white"
          : null;
        const piece4 = square4.querySelector(".black-piece")
          ? "black"
          : square4.querySelector(".white-piece")
          ? "white"
          : null;

        //make if block

        if (
          piece1 &&
          piece2 &&
          piece3 &&
          piece4 &&
          piece1 === piece2 &&
          piece2 === piece3 &&
          piece3 === piece4
        ) {
          console.log("four in a row");
          lastPlacedSquare.removeChild(lastPlacedPiece);
          isWhiteTurn = !isWhiteTurn; // Toggle the turn
          return;
        }
      }
    }
  }
}

function calculateScores() {
  // Check horizontally
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 6; col++) {
      const square1 = document.getElementById(`square-${row}-${col}`);
      const square2 = document.getElementById(`square-${row}-${col + 1}`);
      const square3 = document.getElementById(`square-${row}-${col + 2}`);

      if (square1 && square2 && square3) {
        const piece1 = square1.querySelector(".black-piece")
          ? "black"
          : square1.querySelector(".white-piece")
          ? "white"
          : null;
        const piece2 = square2.querySelector(".black-piece")
          ? "black"
          : square2.querySelector(".white-piece")
          ? "white"
          : null;
        const piece3 = square3.querySelector(".black-piece")
          ? "black"
          : square3.querySelector(".white-piece")
          ? "white"
          : null;

        if (
          piece1 &&
          piece2 &&
          piece3 &&
          piece1 === piece2 &&
          piece2 === piece3
        ) {
          console.log(`Three ${piece1} pieces found horizontally.`);
        }
      }
    }
  }

  // Check vertically
  for (let col = 0; col < 8; col++) {
    for (let row = 0; row < 6; row++) {
      const square1 = document.getElementById(`square-${row}-${col}`);
      const square2 = document.getElementById(`square-${row + 1}-${col}`);
      const square3 = document.getElementById(`square-${row + 2}-${col}`);

      if (square1 && square2 && square3) {
        const piece1 = square1.querySelector(".black-piece")
          ? "black"
          : square1.querySelector(".white-piece")
          ? "white"
          : null;
        const piece2 = square2.querySelector(".black-piece")
          ? "black"
          : square2.querySelector(".white-piece")
          ? "white"
          : null;
        const piece3 = square3.querySelector(".black-piece")
          ? "black"
          : square3.querySelector(".white-piece")
          ? "white"
          : null;

        if (
          piece1 &&
          piece2 &&
          piece3 &&
          piece1 === piece2 &&
          piece2 === piece3
        ) {
          console.log(`Three ${piece1} pieces found vertically.`);
        }
      }
    }
  }

  // Check diagonally (top-left to bottom-right)
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      const square1 = document.getElementById(`square-${row}-${col}`);
      const square2 = document.getElementById(`square-${row + 1}-${col + 1}`);
      const square3 = document.getElementById(`square-${row + 2}-${col + 2}`);

      if (square1 && square2 && square3) {
        const piece1 = square1.querySelector(".black-piece")
          ? "black"
          : square1.querySelector(".white-piece")
          ? "white"
          : null;
        const piece2 = square2.querySelector(".black-piece")
          ? "black"
          : square2.querySelector(".white-piece")
          ? "white"
          : null;
        const piece3 = square3.querySelector(".black-piece")
          ? "black"
          : square3.querySelector(".white-piece")
          ? "white"
          : null;

        if (
          piece1 &&
          piece2 &&
          piece3 &&
          piece1 === piece2 &&
          piece2 === piece3
        ) {
          console.log(
            `Three ${piece1} pieces found diagonally (top-left to bottom-right).`
          );
        }
      }
    }
  }

  // Check diagonally (top-right to bottom-left)
  for (let row = 0; row < 6; row++) {
    for (let col = 2; col < 8; col++) {
      const square1 = document.getElementById(`square-${row}-${col}`);
      const square2 = document.getElementById(`square-${row + 1}-${col - 1}`);
      const square3 = document.getElementById(`square-${row + 2}-${col - 2}`);

      if (square1 && square2 && square3) {
        const piece1 = square1.querySelector(".black-piece")
          ? "black"
          : square1.querySelector(".white-piece")
          ? "white"
          : null;
        const piece2 = square2.querySelector(".black-piece")
          ? "black"
          : square2.querySelector(".white-piece")
          ? "white"
          : null;
        const piece3 = square3.querySelector(".black-piece")
          ? "black"
          : square3.querySelector(".white-piece")
          ? "white"
          : null;

        if (
          piece1 &&
          piece2 &&
          piece3 &&
          piece1 === piece2 &&
          piece2 === piece3
        ) {
          console.log(
            `Three ${piece1} pieces found diagonally (top-right to bottom-left).`
          );
        }
      }
    }
  }
}

btn.addEventListener("click", calculateScores);


