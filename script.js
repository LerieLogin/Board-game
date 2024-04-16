const board = document.createElement('div');
const main = document.getElementById('container');


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
            if (pieceContainer.children.length === 0) { // Check if the square has no child elements
                const blackPiece = document.createElement('div');
                blackPiece.classList.add('black-piece');
                pieceContainer.appendChild(blackPiece); // Append the black piece directly to the clicked square
                console.log("Piece placed on square:", squareId);
            } else {
                console.log('There is already a piece there.');
            }
        });
        $(".board-square").on("click", function() {
            const clickedSquare = $(this);
            const piece = clickedSquare.children('.piece');
            
            // Remove highlight from previously clicked pieces and squares
            $(".piece-clicked").removeClass("piece-clicked");
            $(".square-can-jump").removeClass("square-can-jump");
            
            if (piece.length > 0) {
                const nextSquareId = getNextSquareId(clickedSquare); // Implement getNextSquareId function to get the ID of the square on the other side
                
                if (nextSquareId && $('#' + nextSquareId).children('.piece').length === 0) {
                    // Highlight the clicked piece
                    piece.addClass("piece-clicked");
                    
                    // Highlight the square that can be jumped to
                    $('#' + nextSquareId).addClass("square-can-jump");
                }
            }
        });
        
        function getNextSquareId(clickedSquare) {
            // Implement logic to determine the ID of the square on the other side
            // For example, if the clicked square has ID squareX, the next square could have ID squareX + 2 or squareX - 2
            // You'll need to adjust this logic based on your specific board layout
        }
        board.appendChild(boardSquare);
    }
    main.appendChild(board);
        
}

makeBoard();


