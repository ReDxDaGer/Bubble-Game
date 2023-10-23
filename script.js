function bubbleMaker(){
    var clutter = "";
    for(var i = 0; i <= 104; i++){
        var num = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#Pbtm").innerHTML = clutter;
}
var timer = 60;
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
setTimer();
bubbleMaker();