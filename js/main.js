const matchingPairs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let gameBoard = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
];

$(function(){
    console.log("Game Ready")
    startGame();
})

function startGame(){
    createBoard();
}

function createBoard(){
    let boardSize = gameBoard.length * gameBoard[0].length;
    for(let i = 1; i <= boardSize; i++){
        $('.gameBoard ul').append(`<li id=${i}>`);
    }
}