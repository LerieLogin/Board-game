const board = document.createElement('div')
const main = document.getElementById('container')
const whitePeice = new Image();
const blackPeice = new Image();



whitePeice.src = 'assets/Download White Circle PNG.jpg';
blackPeice.src = 'assets/—Pngtree—circle clipart black circle_5553148.png';


board.classList.add('board')
whitePeice.classList.add('white-peice')
blackPeice.classList.add('black-peice')

function makeBoard() {
    for (let i = 0; i < 64; i++) {
        const boardSquares = document.createElement('div')
        boardSquares.classList.add('board-square')
        board.appendChild(boardSquares)

    }
    document.body.appendChild(blackPeice)
    main.appendChild(board)
}
makeBoard()





$(document).ready(function () {
    $(".black-piece").draggable();
    $(".board-square").droppable({
        drop: function(event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }
    });
});