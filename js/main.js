window.onload = function(){
    console.log("Game Ready"); 
    startGame() 
}

$(document).bind('mousemove', (e)=>{
    $('#gunFollow').css({left:  e.pageX + 20});
})

let currScore = 0;
let bulletBar = $('.bullets p');
const $score = $('.score p');
const gameMode = [
    easy = {
        speed: 3, 
        birds: 5,
        bullets: ['🔫','🔫','🔫'],
        target: 500
    },medium = {
        speed: 2, 
        birds: 10,
        bullets: ['🔫','🔫','🔫'],
        target: 1000
    },hard = {
        speed: 2, 
        birds: 25,
        bullets: ['🔫','🔫','🔫','🔫','🔫'],
        target: 2500   
    },insane = {
        speed: 1,
        birds: 100,
        bullets: ['🔫','🔫','🔫','🔫','🔫'],
        target: 100000
    }
]

function startGame(){
    localStorage.score = 0;
    localStorage.score != 0 ? $score.text(parseInt(localStorage.score)) : $score.text('0');
    let difficulty = 'easy'//prompt("Easy, Medium, Hard or Insane?").toLowerCase();
    difficulty.match('easy') ? gameSetUp(gameMode[0]) : 
    difficulty.match('hard') ? gameSetUp(gameMode[2]) : 
    difficulty.match('medium') ? gameSetUp(gameMode[1]) : gameSetUp(gameMode[3]);
}
function gameSetUp(difficulty){
    let bullLen = difficulty.bullets.length;
    let winTarget = difficulty.target;
    bulletBar.text(difficulty.bullets.join(''))
    localStorage.setItem('bulletCount', bullLen)
    localStorage.setItem('target', winTarget)
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
            randomTop = (Math.random() * (700 - (-300)) + (-300)); //specify random range for the height
                $(currBird).css({transition: `${difficulty.speed}s linear`})
                $(currBird).css({display: 'block'})
                $(currBird).animate({left: `${randomDist}px`})
                $(currBird).animate({top: `${randomTop}px`})
            })
            setTimeout(birdsMoveDown=()=>{
            randomDist = (Math.random() * (1500 - 0) + 0); //specify random range for the distance
            randomTop = (Math.random() * (700 - (-300)) + (-300)); //specify random range for the height
                $(currBird).css({transition: `${difficulty.speed}s linear`})
                $(currBird).css({display: 'block'})
                $(currBird).animate({left: `${randomDist}px`})
                $(currBird).animate({top: `${randomTop}px`})
            }, 5000)
            setInterval(birdsMoveDown, 1000)
            setInterval(birdsMove, 2500)
        }
    }else {
        ($('.gameBoard').append(`<div class="duck1" id="${0}">`))
        let duckOne = $('.duck1');
        setTimeout(birdsMove=()=>{
        randomDist = (Math.random() * (2300 - 2000) + 2000); //specify random range for the distance
        randomTop = (Math.random() * (500 - (-300)) + (-300)); //specify random range for the height
            $(duckOne).css({transition: `${difficulty.speed}s linear`})
            $(duckOne).css({display: 'block'})
            $(duckOne).animate({left: `${randomDist}px`})
            $(duckOne).animate({top: `${randomTop}px`})
        },100)
        // setInterval(birdsMove, 3000)
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
    }, 700)

    localStorage.target == currScore ? gameWon() : null
}

function missedShot(){
    $('body').toggleClass('missed')
    setTimeout(()=>{
        $('body').toggleClass('missed')
    }, 200)
    shotsRemaining = localStorage.bulletCount - 1;
    localStorage.setItem('bulletCount', shotsRemaining);
    bulletBar.text(`${shotsRemaining} 🔫 left`)
    console.log(localStorage.bulletCount)
    console.log('Missed shot')
    localStorage.bulletCount <= 0 ? gameOver() : null;
}

function gameOver(){
    // location.reload()
    $('.gameOver').css({display: 'block'})
    console.log('Game Over')
}
function gameWon(){
    $('.gameWon').css({display: 'block'})
    console.log('Game Over')
}
$('body').click((e)=>{
    console.log(e)
    e.target.className == 'gameBoard' ? missedShot() : 
    e.target.className == 'duck1' ? duckIsHit.call(this, e) : missedShot();
})