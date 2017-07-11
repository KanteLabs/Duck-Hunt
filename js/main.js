window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}

const birdOne = $('.bird1');

function startGame(){
    setTimeout(function(){
        $(birdOne).animate({left: "800px"})
        $(birdOne).animate({top: "100px"})
    },100)
}

$(birdOne).click(function(){
    console.log("Hit")
    $(birdOne).css({display: "none"})
})