window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}

const birdOne = $('.bird1');

function startGame(){
    $(birdOne).css({background: "blue"});
}