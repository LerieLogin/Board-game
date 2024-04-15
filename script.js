const board = document.createElement('div');
const main = document.getElementById('container');
const whitePiece = new Image();
const blackPiece = new Image();

whitePiece.src = 'assets/Download White Circle PNG.jpg';
blackPiece.src = 'assets/—Pngtree—circle clipart black circle_5553148.png';

board.classList.add('board');
whitePiece.classList.add('white-piece');
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
            console.log("Piece dropped on square:", squareId);
        });
        board.appendChild(boardSquare);
    }
    main.appendChild(board);
    main.appendChild(blackPiece); 
}

makeBoard();
console.log( $(".board-square"))

$(document).ready(function () {
    $(".black-piece").draggable();
    $(".board-square").droppable({
    
        drop: function(event, ui) {
            const squareId = $(this).attr("id");
            console.log("Black piece dropped on square:", squareId);
            $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
            
        }
    });
});