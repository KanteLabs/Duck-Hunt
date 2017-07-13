window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}

let currScore = 0;
const $score = $('.score p');
const gameMode = [
    easy = {
        speed: 10, 
        birds: 1,
        bullets: 5
    },medium = {
        speed: 10, 
        birds: 4,
        bullets: 3
    },hard = {
        speed: 1, 
        birds: 3,
        bullets: 1
    },insane = {
        speed: 1,
        birds: 20,
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
    localStorage.setItem('bulletCount', difficulty.bullets)
    console.log(localStorage.bulletCount)
    if(difficulty.birds >= 2){
        for(let i = 0; i <difficulty.birds; i++){
            ($('.gameBoard').append(`<div class="duck1" id="${i}">`))
        }
        let birdsGroup = $('.gameBoard .duck1')
        for(let i = 0; i <difficulty.birds; i++){
            let currBird = birdsGroup[i];
            setTimeout(function(){
            randomDist = (Math.random() * (2300 - 2000) + 2000); //specify random range for the distance
            randomTop = (Math.random() * (500 - (-300)) + (-300)); //specify random range for the height
                $(currBird).css({display: 'block'})
                $(currBird).animate({left: `${randomDist}px`})
                $(currBird).animate({top: `${randomTop}px`})
                $(currBird).css({transition: `${difficulty.speed}s linear`})
            },100)
        }
    }else {
        ($('.gameBoard').append(`<div class="duck1" id="${0}">`))
        let duckOne = $('.duck1');
        setTimeout(function(){
        randomDist = (Math.random() * (2300 - 2000) + 2000); //specify random range for the distance
        randomTop = (Math.random() * (500 - (-300)) + (-300)); //specify random range for the height
            $(duckOne).css({display: 'block'})
            $(duckOne).animate({left: `${randomDist}px`})
            $(duckOne).animate({top: `${randomTop}px`})
            $(duckOne).css({transition: `${difficulty.speed}s linear`})
        },100)
    }
}

function duckIsHit(e){
    let id = e.target.id;
    console.log('hit')
    console.log(e.target.id)
    currScore+=100;
    localStorage.setItem('score', currScore);
    $score.text(parseInt(localStorage.getItem('score')));
    $(`#${id}`).animate({transition: '0s'})
    $(`#${id}`).css({background: "url('./images/shotDuck.png') center no-repeat"})
    $(`#${id}`).css({top: `${e.pageY - e.offsetY}px`})
    $(`#${id}`).css({left: `${e.pageX - e.offsetX}px`})
    setTimeout(()=>{
        $(`#${id}`).css({visibility: 'hidden'});
    },700)
}

function missedShot(){
    let bullet = '🔫';
    shotsRemaining = localStorage.bulletCount - 1;
    localStorage.setItem('bulletCount', shotsRemaining);
    console.log(localStorage.bulletCount)
    console.log('Missed shot')
    localStorage.bulletCount <= 0 ? gameOver() : null;
}

function gameOver(){
    console.log('Game Over')
}

$('body').click((e)=>{
    console.log(e)
    e.target.className == 'gameBoard' ? missedShot() : e.target.className == 'duck1' ? duckIsHit.call(this, e) : missedShot();
})