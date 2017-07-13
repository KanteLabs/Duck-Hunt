window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}

let currScore = 0;
const birdOne = $('.duck1');
const birdTwo = $('.duck2');
const $score = $('.score p');

const gameMode = [
    easy = {
        speed: 10, 
        birds: 1,
        size: '300px',
        bullets: 5,
    },medium = {
        speed: 10, 
        birds: 4,
        size: '200px',
        bullets: 3
    },hard = {
        speed: 1, 
        birds: 3,
        size: '150px',
        bullets: 1
    },insane = {
        speed: 1,
        birds: 10,
        size: '100px',
        bullets: 3
    }
]

function startGame(){
    localStorage.score = 0;
    localStorage.score != 0 ? $score.text(parseInt(localStorage.score)) : $score.text('0');
    let difficulty = 'medium'//prompt("Easy, Medium, Hard or Insane?").toLowerCase();
    difficulty.match('easy') ? moveBird(gameMode[0]) : difficulty.match('hard') ? moveBird(gameMode[2]) : moveBird(gameMode[1]);
}
function moveBird(difficulty){
    if(difficulty.birds >= 2){
        
        for(let i = 0; i <difficulty.birds; i++){
            ($('.gameBoard').append('<div class="duck1">'))
        }

        let birdsGroup = $('.gameBoard .duck1')

        $('.duck1').click(function(e){
            $(this).animate({transition: '0s'})
            $(this).css({background: "url('./images/shotDuck.png') center no-repeat"})
            $(this).css({top: `${e.pageY - e.offsetY}px`})
            $(this).css({left: `${e.pageX - e.offsetX}px`})
            setTimeout(()=>{
                $(this).css({visibility: 'hidden'});
            },700)
        })

        for(let i = 0; i <difficulty.birds; i++){
            let currBird = birdsGroup[i];
            setTimeout(function(){
            randomDist = (Math.random() * (2300 - 2000) + 2000); //specify random range for the distance
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
        randomDist = (Math.random() * (2300 - 2000) + 2000); //specify random range for the distance
        randomTop = (Math.random() * (500 - (-300)) + (-300)); //specify random range for the height
            $(birdOne).css({display: 'block'})
            $(birdOne).css({width: `${difficulty.size}`})
            $(birdOne).css({height: `${difficulty.size}`})
            $(birdOne).animate({left: `${randomDist}px`})
            $(birdOne).animate({top: `${randomTop}px`})
            $(birdOne).css({transition: `${difficulty.speed}s linear`})
        },100)
    }
}
$(birdOne).click(function(e){
    $(this).animate({transition: '0s'})
    $(this).css({background: "url('./images/shotDuck.png') center no-repeat"})
    $(this).css({top: `${e.pageY}px`})
    $(this).css({left: `${e.pageX}px`})
    setTimeout(()=>{
        $(this).css({visibility: 'hidden'});
    },700)
})

function birdIsHit(e){
    console.log('hit')
    currScore+=500;
    localStorage.setItem('score', currScore);
    $score.text(parseInt(localStorage.getItem('score')));
}

$('body').click((e)=>{
    console.log(e)
    e.target.className == 'gameBoard' ? console.log('shot missed') : birdIsHit();
})