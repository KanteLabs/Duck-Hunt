window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}

const birdOne = $('.duck1');
const birdTwo = $('.duck2');
const gameMode = [
    easy = {
        speed: 3, 
        birds: 1,
        size: '300px',
        bullets: 5,
    },medium = {
        speed: 2, 
        birds: 2,
        size: '200px',
        bullets: 3
    },hard = {
        speed: 1, 
        birds: 3,
        size: '150px',
        bullets: 1
    }
]

function startGame(){
    let difficulty = 'easy'//prompt("Easy, Medium or Hard").toLowerCase();
    difficulty.match('easy') ? moveBird(gameMode[0]) : difficulty.match('hard') ? moveBird(gameMode[2]) : moveBird(gameMode[1]);
}
function moveBird(difficulty){
    let randomDist = (Math.random() * (2000 - 1500) + 1500); //specify random range for the distance
    let randomTop = (Math.random() * (500 - (-300)) + (-300)); //specify random range for the height
    setTimeout(function(){
        $(birdOne).css({width: `${difficulty.size}`})
        $(birdOne).css({height: `${difficulty.size}`})
        $(birdOne).animate({left: `${randomDist}px`})
        $(birdOne).animate({top: `${randomTop}px`})
        $(birdOne).css({transition: `${difficulty.speed}s`})
    },100)
}
$(birdOne).click(function(){
    console.log("Hit")
    $(birdOne).css({display: "none"})
})