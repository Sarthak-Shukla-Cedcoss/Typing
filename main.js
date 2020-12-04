const clktimmer = document.querySelector("#clock");
const resetbtn = document.querySelector("#reset");
const txtar = document.querySelector("#text-area");
const orgtext = document.querySelector("#original-text p").innerHTML;
var timer = [0,0,0,0]
var interval;
var timerRunning = false;
function leadingZero(time){
    if(time<=9){
        time = "0" + time;
    }
    return time;
}
function timerstart(){
    let currenttime = leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+timer[2];
    clock.innerHTML = currenttime;
    timer[3]++; 

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}
function start(){
    let textlenght = txtar.value.length;
    if(textlenght === 0 && !timerRunning){
        timerRunning = true;
        interval = setInterval(timerstart,10);
    }
}
function spellcheck(){
    let textEnter = txtar.value;
    let orgtextsub = orgtext.substring(0,textEnter.length);
    if(textEnter == orgtext ){
        clearInterval(interval);
        txtar.style.borderColor="#3d985d";
    }
    else if(textEnter == orgtextsub)
    {
        txtar.style.borderColor="#7769ef";
    }
    else{
        txtar.style.borderColor="#ea3939";
    }
}
function reset(){
    clearInterval(interval);
    interval = "";
    timer = [0,0,0,0];
    txtar.value = "";
    timerRunning = false;
    clktimmer.innerHTML = "00:00:00";
    txtar.style.borderColor="grey";
}

txtar.addEventListener("keypress",start);
txtar.addEventListener("keyup",spellcheck);
resetbtn.addEventListener("click",reset);