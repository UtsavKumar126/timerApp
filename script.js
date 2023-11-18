const timerDiv=document.getElementById("timers");
const noTimer=document.getElementById("noTimer");
const audioFile=document.getElementById("myAudio");
function startNewTimer(){
    const hrs=document.getElementById("hours").value || 0;
    const min=document.getElementById("mins").value || 0;
    const sec=document.getElementById("secs").value || 0;

    if(!hrs && !min && !sec){
       alert("invalid input");
       return;
    }
    const timeInSec=(parseInt(hrs)*3600)+(parseInt(min)*60)+parseInt(sec);

    createTimer(timeInSec);
}
function createTimer(timeInSec){

    const timerDisplay=document.createElement("div");
    timerDiv.appendChild(timerDisplay);
    timerDisplay.className="timers"
    

    if(timerDiv.hasChildNodes){
        noTimer.style.display="none";
    }
    const timeInterval=setInterval(()=>{
      
        timeInSec--;
        const hrs=Math.floor(timeInSec/3600);
        const min=Math.floor((timeInSec%3600)/60);
        const sec=Math.floor((timeInSec%60));

        timerDisplay.innerHTML=`
            <label for="">Time Left:</label>
            <div class="time">${hrs}:${min}:${sec}</div>
            <button id="setBut" onclick="deleteTimer(this)">Delete</button>
        `
        if(timeInSec<=0){
            clearInterval(timeInterval)
            timerDisplay.innerHTML=`
            <div>Time is Up !</div>
        `
        timerDisplay.className="timers2"
        audioFile.play();
        }
    },1000)
}
function deleteTimer(button){
    if(timerDiv.hasChildNodes()){
        noTimer.style.display="block";
    }
    button.parentNode.remove();
}
