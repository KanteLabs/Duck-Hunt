window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}
const gameMode = [
    easy = {
        speed: 3, 
        birds: 1,
        size: '300px',
        bullets: 5,
    },
    medium = {
        speed: 2, 
        birds: 2,
        size: '200px',
        bullets: 3
    },
    hard = {
        speed: 1, 
        birds: 3,
        size: '150px',
        bullets: 1
    }
]
const birdOne = $('.bird1');

function startGame(){
    let difficulty = prompt("Easy, Medium or Hard").toLowerCase();
    difficulty.match('easy') ? moveBird(gameMode[0]) : difficulty.match('hard') ? moveBird(gameMode[2]) : moveBird(gameMode[1]);
}
function moveBird(difficulty){
    setTimeout(function(){
        $(birdOne).animate({left: `${Math.random()*15000}px`})
        $(birdOne).animate({top: `${Math.random()*500}px`})
        $(birdOne).css({transition: `${difficulty.speed}s`})
    },100)
}
$(birdOne).click(function(){
    console.log("Hit")
    $(birdOne).css({display: "none"})
})