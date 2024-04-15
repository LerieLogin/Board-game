const board = document.createElement('div');
const main = document.getElementById('container');
const blackPiece = new Image();

blackPiece.src = 'assets/—Pngtree—circle clipart black circle_5553148.png';
blackPiece.draggable = true; // Set the black piece as draggable

board.classList.add('board');
blackPiece.classList.add('black-piece');

function makeBoard() {
    for (let i = 0; i < 64; i++) {
        const boardSquare = document.createElement('div');
        boardSquare.classList.add('board-square');
        boardSquare.id = 'square' + i;
        boardSquare.addEventListener('dragover', function(event) {
            event.preventDefault();
        });
        boardSquare.addEventListener('drop', function(event) {
            event.preventDefault();
            const squareId = this.id;
            console.log("Black piece dropped on square:", squareId);
        });
        board.appendChild(boardSquare);
    }
    main.appendChild(board);
    main.appendChild(blackPiece); // Append black piece
}

makeBoard();

// jQuery for dragstart event
$(document).ready(function () {
    console.log("Document ready.");
    
    // Check if black-piece is draggable
    $(".black-piece").on('dragstart', function(event) {
        console.log("Drag event started.");
        event.originalEvent.dataTransfer.setData("text/plain", "black-piece");
    });
});