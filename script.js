var timer = 60;
var score = 0;
var hit = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#Scores").textContent = score;
}
function hitval(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hit;
}
function bubbleMaker(){
    var clutter = "";
    for(var i = 0; i <= 104; i++){
        var num = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#Pbtm").innerHTML = clutter;
}
function setTimer(){
    var timeOut  = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearTimeout(timeOut)
        }
    },1000)
}

document.querySelector("#Pbtm").addEventListener('click',function(details){
    var sr = Number(details.target.textContent)
    console.log(sr)
    if(hit === sr){
        bubbleMaker();
        increaseScore();
        hitval();
    }
})

setTimer();
hitval();
bubbleMaker();
