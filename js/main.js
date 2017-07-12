window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}
const gameMode = [
    easy = {
        speed: 3, 
        birds: 1,
        size: '300px',
        bullets: 5
    },
]
const birdOne = $('.bird1');

function startGame(){
    setTimeout(function(){
        $(birdOne).animate({left: `${Math.random()*15000}px`})
        $(birdOne).animate({top: `${Math.random()*500}px`})
    },100)
}

$(birdOne).click(function(){
    console.log("Hit")
    $(birdOne).css({display: "none"})
})