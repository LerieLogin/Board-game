const board = document.createElement('div');
const main = document.getElementById('container');
const btn = document.getElementById('submit-score')
let isWhiteTurn = true
let lastPlacedPiece = null;
let lastPlacedSquare = null;


board.classList.add('board');


function makeBoard() {
    for (let i = 0; i < 64; i++) {
        const boardSquare = document.createElement('div');
        boardSquare.classList.add('board-square');
        boardSquare.id = 'square' + i;
        boardSquare.addEventListener('click', function(event) {
            event.preventDefault();
            const squareId = this.id;
            const pieceContainer = this;
            if (isWhiteTurn) {
                console.log('white turn')
                if (pieceContainer.children.length === 0) { 
                    const whitePiece = document.createElement('div');
                    whitePiece.classList.add('white-piece');
                    pieceContainer.appendChild(whitePiece);
                    lastPlacedPiece = whitePiece;
                    lastPlacedSquare = pieceContainer; 
                    fourRowCheck();
                    console.log("Piece placed on square:", squareId);
                } else {
                    console.log('There is already a piece there.');
                    return;
                }
                isWhiteTurn = !isWhiteTurn
            } else {
                console.log('black turn')
                if (pieceContainer.children.length === 0) { 
                    const blackPiece = document.createElement('div');
                    blackPiece.classList.add('black-piece');
                    pieceContainer.appendChild(blackPiece); 
                    lastPlacedPiece = blackPiece;
                    lastPlacedSquare = pieceContainer;
                    fourRowCheck();
                    console.log("Piece placed on square:", squareId);
                } else {
                    console.log('There is already a piece there.');
                    return;
                }
                isWhiteTurn = !isWhiteTurn
            }
        });
        
        board.appendChild(boardSquare);
    }
    main.appendChild(board);
}


makeBoard();

function fourRowCheck() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 6; col++) {
            const square1 = document.getElementById(`square${row * 8 + col}`);
            const square2 = document.getElementById(`square${row * 8 + col - 1}`);
            const square3 = document.getElementById(`square${row * 8 + col - 2}`);
            const square4 = document.getElementById(`square${row * 8 + col - 3}`);

            if (square1 && square2 && square3 && square4) {
                const piece1 = square1.querySelector('.black-piece') ? 'black' : square1.querySelector('.white-piece') ? 'white' : null;
                const piece2 = square2.querySelector('.black-piece') ? 'black' : square2.querySelector('.white-piece') ? 'white' : null;
                const piece3 = square3.querySelector('.black-piece') ? 'black' : square3.querySelector('.white-piece') ? 'white' : null;
                const piece4 = square4.querySelector('.black-piece') ? 'black' : square4.querySelector('.white-piece') ? 'white' : null;

                //make if block
                
                if (piece1 && piece2 && piece3 && piece4 && piece1 == piece2 && piece2 == piece3 && piece3 == piece4) {
                    console.log('four in a row');
                    lastPlacedSquare.removeChild(lastPlacedPiece);
                    isWhiteTurn = !isWhiteTurn; // Toggle the turn
                    return;
                }
            }
        }
    }


    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 6; col++) {
            const square1 = document.getElementById(`square${row * 8 + col}`);
            const square2 = document.getElementById(`square${row * 8 + col + 1}`);
            const square3 = document.getElementById(`square${row * 8 + col + 2}`);
            const square4 = document.getElementById(`square${row * 8 + col + 3}`);

            if (square1 && square2 && square3 && square4) {
                const piece1 = square1.querySelector('.black-piece') ? 'black' : square1.querySelector('.white-piece') ? 'white' : null;
                const piece2 = square2.querySelector('.black-piece') ? 'black' : square2.querySelector('.white-piece') ? 'white' : null;
                const piece3 = square3.querySelector('.black-piece') ? 'black' : square3.querySelector('.white-piece') ? 'white' : null;
                const piece4 = square4.querySelector('.black-piece') ? 'black' : square4.querySelector('.white-piece') ? 'white' : null;

                //make if block
                
                if (piece1 && piece2 && piece3 && piece4 && piece1 == piece2 && piece2 == piece3 && piece3 == piece4) {
                    console.log('four in a row');
                    lastPlacedSquare.removeChild(lastPlacedPiece);
                    isWhiteTurn = !isWhiteTurn; // Toggle the turn
                    return;
                }
            }
        }
    }

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 6; col++) {
            const square1 = document.getElementById(`square${row * 8 + col}`);
            const square2 = document.getElementById(`square${(row + 1) * 8 + col}`);
            const square3 = document.getElementById(`square${(row + 2) * 8 + col}`);
            const square4 = document.getElementById(`square${(row + 3) * 8 + col}`);

            if (square1 && square2 && square3 && square4) {
                const piece1 = square1.querySelector('.black-piece') ? 'black' : square1.querySelector('.white-piece') ? 'white' : null;
                const piece2 = square2.querySelector('.black-piece') ? 'black' : square2.querySelector('.white-piece') ? 'white' : null;
                const piece3 = square3.querySelector('.black-piece') ? 'black' : square3.querySelector('.white-piece') ? 'white' : null;
                const piece4 = square4.querySelector('.black-piece') ? 'black' : square4.querySelector('.white-piece') ? 'white' : null;

                //make if block
                
                if (piece1 && piece2 && piece3 && piece4 && piece1 == piece2 && piece2 == piece3 && piece3 == piece4) {
                    console.log('four in a row');
                    lastPlacedSquare.removeChild(lastPlacedPiece);
                    isWhiteTurn = !isWhiteTurn; // Toggle the turn
                    return;
                }
            }        
        }
    }

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 6; col++) {
            const square1 = document.getElementById(`square${row * 8 + col}`);
            const square2 = document.getElementById(`square${(row + 1) * 8 + col + 1}`);
            const square3 = document.getElementById(`square${(row + 2) * 8 + col + 2}`);
            const square4 = document.getElementById(`square${(row + 3) * 8 + col + 3}`);

            if (square1 && square2 && square3 && square4) {
                const piece1 = square1.querySelector('.black-piece') ? 'black' : square1.querySelector('.white-piece') ? 'white' : null;
                const piece2 = square2.querySelector('.black-piece') ? 'black' : square2.querySelector('.white-piece') ? 'white' : null;
                const piece3 = square3.querySelector('.black-piece') ? 'black' : square3.querySelector('.white-piece') ? 'white' : null;
                const piece4 = square4.querySelector('.black-piece') ? 'black' : square4.querySelector('.white-piece') ? 'white' : null;

                //make if block
                
                if (piece1 && piece2 && piece3 && piece4 && piece1 == piece2 && piece2 == piece3 && piece3 == piece4) {
                    console.log('four in a row');
                    lastPlacedSquare.removeChild(lastPlacedPiece);
                    isWhiteTurn = !isWhiteTurn; // Toggle the turn
                    return;
                }
            }        
        }
    }

    for (let row = 0; row < 8; row++) {
        for (let col = 2; col < 8; col++) {
            const square1 = document.getElementById(`square${row * 8 + col}`);
            const square2 = document.getElementById(`square${(row + 1) * 8 + col - 1}`);
            const square3 = document.getElementById(`square${(row + 2) * 8 + col - 2}`);
            const square4 = document.getElementById(`square${(row + 3) * 8 + col - 3}`);

            if (square1 && square2 && square3 && square4) {
                const piece1 = square1.querySelector('.black-piece') ? 'black' : square1.querySelector('.white-piece') ? 'white' : null;
                const piece2 = square2.querySelector('.black-piece') ? 'black' : square2.querySelector('.white-piece') ? 'white' : null;
                const piece3 = square3.querySelector('.black-piece') ? 'black' : square3.querySelector('.white-piece') ? 'white' : null;
                const piece4 = square4.querySelector('.black-piece') ? 'black' : square4.querySelector('.white-piece') ? 'white' : null;

                //make if block
                
                if (piece1 && piece2 && piece3 && piece4 && piece1 == piece2 && piece2 == piece3 && piece3 == piece4) {
                    console.log('four in a row');
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
            const square1 = document.getElementById(`square${row * 8 + col}`);
            const square2 = document.getElementById(`square${row * 8 + col + 1}`);
            const square3 = document.getElementById(`square${row * 8 + col + 2}`);
            
            if (square1 && square2 && square3) {
                const piece1 = square1.querySelector('.black-piece') ? 'black' : square1.querySelector('.white-piece') ? 'white' : null;
                const piece2 = square2.querySelector('.black-piece') ? 'black' : square2.querySelector('.white-piece') ? 'white' : null;
                const piece3 = square3.querySelector('.black-piece') ? 'black' : square3.querySelector('.white-piece') ? 'white' : null;
                
                if (piece1 && piece2 && piece3 && piece1 === piece2 && piece2 === piece3) {
                    console.log(`Three ${piece1} pieces found horizontally.`);
                }
            }
        }
    }

    // Check vertically
    for (let col = 0; col < 8; col++) {
        for (let row = 0; row < 6; row++) {
            const square1 = document.getElementById(`square${row * 8 + col}`);
            const square2 = document.getElementById(`square${(row + 1) * 8 + col}`);
            const square3 = document.getElementById(`square${(row + 2) * 8 + col}`);
            
            if (square1 && square2 && square3) {
                const piece1 = square1.querySelector('.black-piece') ? 'black' : square1.querySelector('.white-piece') ? 'white' : null;
                const piece2 = square2.querySelector('.black-piece') ? 'black' : square2.querySelector('.white-piece') ? 'white' : null;
                const piece3 = square3.querySelector('.black-piece') ? 'black' : square3.querySelector('.white-piece') ? 'white' : null;
                
                if (piece1 && piece2 && piece3 && piece1 === piece2 && piece2 === piece3) {
                    console.log(`Three ${piece1} pieces found vertically.`);
                }
            }
        }
    }

    // Check diagonally (top-left to bottom-right)
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
            const square1 = document.getElementById(`square${row * 8 + col}`);
            const square2 = document.getElementById(`square${(row + 1) * 8 + col + 1}`);
            const square3 = document.getElementById(`square${(row + 2) * 8 + col + 2}`);
            
            if (square1 && square2 && square3) {
                const piece1 = square1.querySelector('.black-piece') ? 'black' : square1.querySelector('.white-piece') ? 'white' : null;
                const piece2 = square2.querySelector('.black-piece') ? 'black' : square2.querySelector('.white-piece') ? 'white' : null;
                const piece3 = square3.querySelector('.black-piece') ? 'black' : square3.querySelector('.white-piece') ? 'white' : null;
                
                if (piece1 && piece2 && piece3 && piece1 === piece2 && piece2 === piece3) {
                    console.log(`Three ${piece1} pieces found diagonally (top-left to bottom-right).`);
                }
            }
        }
    }

    // Check diagonally (top-right to bottom-left)
    for (let row = 0; row < 6; row++) {
        for (let col = 2; col < 8; col++) {
            const square1 = document.getElementById(`square${row * 8 + col}`);
            const square2 = document.getElementById(`square${(row + 1) * 8 + col - 1}`);
            const square3 = document.getElementById(`square${(row + 2) * 8 + col - 2}`);
            
            if (square1 && square2 && square3) {
                const piece1 = square1.querySelector('.black-piece') ? 'black' : square1.querySelector('.white-piece') ? 'white' : null;
                const piece2 = square2.querySelector('.black-piece') ? 'black' : square2.querySelector('.white-piece') ? 'white' : null;
                const piece3 = square3.querySelector('.black-piece') ? 'black' : square3.querySelector('.white-piece') ? 'white' : null;
                
                if (piece1 && piece2 && piece3 && piece1 === piece2 && piece2 === piece3) {
                    console.log(`Three ${piece1} pieces found diagonally (top-right to bottom-left).`);
                }
            }
        }
    }
}

btn.addEventListener('click', calculateScores)


