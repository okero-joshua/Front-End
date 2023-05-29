const $ =  selector => document.querySelector(selector);


const padSingleDigit = num => num.toString().padStart(2,"0");

let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const displayCurrentTime = () => {
    //retrieve time values
    var date = new Date();
    var hour = date.getHours();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour>12 ? hour-12:hour;
    var minute = date.getMinutes();
    var second = date.getSeconds();


    document.getElementById('hour').textContent = padSingleDigit(hour) +":";
    document.getElementById('minute').textContent = padSingleDigit(minute)+":";
    document.getElementById('second').textContent = padSingleDigit(second);
    document.getElementById('ampm').textContent = ampm;

};

document.addEventListener("DOMContentLoaded", () => {
    // set initial clock display 
    displayCurrentTime();
    //Set interval timer to display new time every second. Don't store timer object because it 
        // won't be needed - clock will just run.
    setInterval(displayCurrentTime, 1000);    
});


const tickStopwatch = () =>{
    
    elapsedMilliseconds += 10;
  
    if (elapsedMilliseconds >= 1000) {
      elapsedSeconds++;
      elapsedMilliseconds = 0;
    }
  
    if (elapsedSeconds >= 60) {
        elapsedMinutes++;
        elapsedSeconds = 0;
    }

    document.getElementById("s_ms").textContent = padSingleDigit(elapsedMilliseconds);
    document.getElementById("s_seconds").textContent = padSingleDigit(elapsedSeconds);
    document.getElementById("s_minutes").textContent = padSingleDigit(elapsedMinutes);

};

const startStopwatch = evt => {
    //Q:Canceling default actions of the links means clearing the document elements 
    evt.preventDefault();
    
    tickStopwatch();

    stopwatchTimer = setInterval(tickStopwatch,10);
    stopwatchTimer;
};

const stopStopwatch = evt => {
    evt.preventDefault();
    clearInterval(stopwatchTimer);
};

const  resetStopwatch = evt => {
    evt.preventDefault();
    clearInterval(stopwatchTimer);
    
    elapsedMilliseconds = 0;
    elapsedSeconds = 0;
    elapsedMinutes = 0;

    document.getElementById("s_ms").textContent = "000";
    document.getElementById("s_seconds").textContent = "000";
    document.getElementById("s_minutes").textContent = "00";
};

document.addEventListener("DOMContentLoaded",
 ()=> {$("#start").addEventListener("click", startStopwatch);
 $("#Stop").addEventListener("click", stopStopwatch);
 $("#reset").addEventListener("click", resetStopwatch);
});
