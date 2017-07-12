window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}

const birdOne = $('.duck1');
const birdTwo = $('.duck2');
const gameMode = [
    easy = {
        speed: 10, 
        birds: 1,
        size: '300px',
        bullets: 5,
    },medium = {
        speed: 10, 
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
    let difficulty = 'medium'//prompt("Easy, Medium or Hard").toLowerCase();
    difficulty.match('easy') ? moveBird(gameMode[0]) : difficulty.match('hard') ? moveBird(gameMode[2]) : moveBird(gameMode[1]);
}
function moveBird(difficulty){
    if(difficulty.birds >= 2){
        let birdsGroup = $('.gameBoard div')
        for(let i = 0; i <difficulty.birds; i++){
            let currBird = birdsGroup[i];
            setTimeout(function(){
            randomDist = (Math.random() * (2100 - 1800) + 1800); //specify random range for the distance
            randomTop = (Math.random() * (500 - (-300)) + (-300)); //specify random range for the height
                $(currBird).css({display: 'block'})
                $(currBird).css({width: `${difficulty.size}`})
                $(currBird).css({height: `${difficulty.size}`})
                $(currBird).animate({left: `${randomDist}px`})
                $(currBird).animate({top: `${randomTop}px`})
                $(currBird).css({transition: `${difficulty.speed}s linear`})
            },100)
        }
    }else {
        setTimeout(function(){
            $(birdOne).css({display: 'block'})
            $(birdOne).css({width: `${difficulty.size}`})
            $(birdOne).css({height: `${difficulty.size}`})
            $(birdOne).animate({left: `${randomDist}px`})
            $(birdOne).animate({top: `${randomTop}px`})
            $(birdOne).css({transition: `${difficulty.speed}s linear`})
        },100)
    }
}
$(birdOne).click(function(){
    console.log("Hit")
    // localStorage.setItem(score, "500")
    $(this).animate({transition: '0s'})
    $(this).css({background: "url('./images/shotDuck.png') center no-repeat"})
    setTimeout(()=>{
        $(this).css({opacity: '0'});
    },700)
})