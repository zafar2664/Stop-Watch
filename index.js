const start = document.querySelector("#start");
const pause = document.querySelector("#stop");
const reset = document.querySelector("#reset");


let [second, minutes, hour]=[0,0,0];
let displayTime=document.getElementById('display-Time');
let timer=null;



start.addEventListener("click",watchStart);
pause.addEventListener("click",watchStop);
reset.addEventListener("click",WatchReset);


function stopWatch(){
    second++;
    if(second==60){
        second=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hour++;


        }
    }
    let h= hour<10?"0" + hour : hour;
    let m= minutes<10?"0" + minutes : minutes;
    let s= second<10?"0" + second : second;
    displayTime.innerHTML=h+":"+m+":"+s;
}


function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }
   timer= setInterval(stopWatch,1000);
}
function watchStop(){
    clearInterval(timer);
}
function WatchReset(){
    clearInterval(timer);
    [second, minutes, hour]=[0,0,0];
    displayTime.innerHTML="00:00:00";
}