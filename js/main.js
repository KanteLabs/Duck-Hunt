window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}

let currScore = 0;
let bulletBar = $('.bullets p');
const $score = $('.score p');
const gameMode = [
    easy = {
        speed: 10, 
        birds: 1,
        bullets: ['🔫','🔫','🔫','🔫','🔫']
    },medium = {
        speed: 8, 
        birds: 4,
        bullets: ['🔫','🔫','🔫']
    },hard = {
        speed: 1, 
        birds: 3,
        bullets: ['🔫','🔫','🔫']
    },insane = {
        speed: 1,
        birds: 200,
        bullets: ['🔫','🔫','🔫','🔫','🔫']
    }
]

function startGame(){
    localStorage.score = 0;
    localStorage.score != 0 ? $score.text(parseInt(localStorage.score)) : $score.text('0');
    let difficulty = 'medium'//prompt("Easy, Medium, Hard or Insane?").toLowerCase();
    difficulty.match('easy') ? gameSetUp(gameMode[0]) : 
    difficulty.match('hard') ? gameSetUp(gameMode[2]) : 
    difficulty.match('medium') ? gameSetUp(gameMode[1]) : gameSetUp(gameMode[3]);
}
function gameSetUp(difficulty){
    let bullLen = difficulty.bullets.length;
    bulletBar.text(difficulty.bullets.join(''))
    localStorage.setItem('bulletCount', bullLen)
    console.log(`Player has ${localStorage.bulletCount} shots`)
    moveBird(difficulty)
}
function moveBird(difficulty){
    if(difficulty.birds >= 2){
        for(let i = 0; i <difficulty.birds; i++){
            ($('.gameBoard').append(`<div class="duck1" id="${i}">`))
        }
        let birdsGroup = $('.gameBoard .duck1')
        for(let i = 0; i <difficulty.birds; i++){
            let currBird = birdsGroup[i];
            setTimeout(birdsMove=()=>{
            randomDist = (Math.random() * (2300 - 1500) + 1500); //specify random range for the distance
            randomTop = (Math.random() * (500 - (-1000)) + (-1000)); //specify random range for the height
                $(currBird).css({display: 'block'})
                $(currBird).animate({left: `${randomDist}px`})
                $(currBird).animate({top: `${randomTop}px`})
                $(currBird).css({transition: `${difficulty.speed}s linear`})
            })
            setInterval(birdsMove, 3000)
        }
    }else {
        ($('.gameBoard').append(`<div class="duck1" id="${0}">`))
        let duckOne = $('.duck1');
        setTimeout(birdsMove=()=>{
        randomDist = (Math.random() * (2300 - 2000) + 2000); //specify random range for the distance
        randomTop = (Math.random() * (500 - (-300)) + (-300)); //specify random range for the height
            $(duckOne).css({display: 'block'})
            $(duckOne).animate({left: `${randomDist}px`})
            $(duckOne).animate({top: `${randomTop}px`})
            $(duckOne).css({transition: `${difficulty.speed}s linear`})
        },100)
        setInterval(birdsMove, 3000)
    }
}

function duckIsHit(e){
    let id = e.target.id;
    console.log('hit')
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
    $('body').toggleClass('missed')
    setTimeout(()=>{
        $('body').toggleClass('missed')
    }, 200)
    shotsRemaining = localStorage.bulletCount - 1;
    localStorage.setItem('bulletCount', shotsRemaining);
    bulletBar.text(shotsRemaining)
    console.log(localStorage.bulletCount)
    console.log('Missed shot')
    localStorage.bulletCount <= 0 ? gameOver() : null;
}

function gameOver(){
    // location.reload()
    console.log('Game Over')
}

$('body').click((e)=>{
    console.log(e)
    e.target.className == 'gameBoard' ? missedShot() : e.target.className == 'duck1' ? duckIsHit.call(this, e) : missedShot();
})