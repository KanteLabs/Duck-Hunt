window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}

const birdOne = $('.bird1');

function startGame(){
    setTimeout(function(){
        $(birdOne).animate({left: `${Math.random()*1000}px`})
        $(birdOne).animate({top: `${Math.random()*500}px`})
    },100)
}

$(birdOne).click(function(){
    console.log("Hit")
    $(birdOne).css({display: "none"})
})