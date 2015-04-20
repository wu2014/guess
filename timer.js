var showDebug = true;
var time = 0; // initial time for Stopwatch
var time2 = 30000; // initial time for Countdown
var running = 0; // stop
var timer = 0; // Stopwatch
window.onload = function() {
    if (showDebug) {
        document.getElementById("debugOnOff").innerHTML = "Debug is On";
    } else {
        document.getElementById("debugOnOff").innerHTML = "Debug is Off";
    } 
    // choose timer: Countdown or Stopwatch ?         
    document.getElementById("chooseTimer").onclick = function(evt) {  
        if (timer == 0) { // if Stopwatch, click to change Countdown
            timer = 1;
            document.getElementById("chooseTimer").innerHTML = "Countdown"; 
            if (showDebug) { // if debug in on 
                document.getElementById("eventOutput").innerHTML = "<p>" + "You clicked Stopwatch button;" +
                 "</p>" + "<p>" + "You choose Countdown timer." + "</p>";
            } 
        } else {
            timer = 0; // click to change Stopwatch
            document.getElementById("chooseTimer").innerHTML = "Stopwatch";
            if (showDebug) { // if debug in on
                document.getElementById("eventOutput").innerHTML = "<p>" + "You clicked Countdown button;" +
                  "</p>" + "<p>" + "You choose Countdown timer." + "</p>";
            }
        }
    }// choose timer onclick event

    document.getElementById("startStop").onclick = function(evt) {
        if (running == 0 && timer == 0) { // if stop and is in Stopwatch
            running = 1;
            setInterval(increment,10); 
            document.getElementById("startStop").innerHTML = "Stop";
           if (showDebug) { // if debug in on
               document.getElementById("eventOutput").innerHTML = "<p>" + "You clicked Start button;" +
                "</p>" + "<p>" + "Stopwatch timer will increase time." + "</p>";
            }  
        } else if (running == 0 && timer == 1) { // if stop and is in Countdown
            running = 1;
            setInterval(decrement,10); 
            document.getElementById("startStop").innerHTML = "Stop"; 
            if (showDebug) { // if debug in on
                document.getElementById("eventOutput").innerHTML = "<p>" + "You clicked Start button:" +
                 "</p>" + "<p>" + "Countdown timer will count down." + "</p>";
            } 
        } else { 
            running = 0;
            document.getElementById("startStop").innerHTML = "Start";
            if (showDebug) { // if debug in on
                document.getElementById("eventOutput").innerHTML = "<p>" + "You clicked Stop button;" +
                "</p>" + "<p>" + "Timer will stop." + "</p>";
            } 
        }    
    } // start/stop onclick event
          
    document.getElementById("reset").onclick = function(evt) {
        if (timer == 0) {
            running = 0;
            	time = 0;
            	document.getElementById("startStop").innerHTML = "Start";
            	document.getElementById("output").innerHTML = "00:00:00";
                if (showDebug) { // if debug in on
                document.getElementById("eventOutput").innerHTML = "<p>" + "You clicked reset button;" +
                "</p>" + "<p>" + "Stopwatch timer will reset to 00:00:00." + "</p>";
                } 
        } else {
            running = 0;
            time2 = 30000;
            document.getElementById("startStop").innerHTML = "Start";
            document.getElementById("output").innerHTML = "05:00:00";
            if (showDebug) { // if debug in on
                document.getElementById("eventOutput").innerHTML = "<p>" + "You clicked reset button;" +
                "</p>" + "<p>" + "Countdown timer will reset to 05:00:00." + "</p>";
            }
        }
    }  //reset onclick event

    document.getElementById("debugOnOff").onclick = function(evt) {
        if (showDebug) { // show debugging is ON, so turn it off
            showDebug = false;
            document.getElementById("debugOnOff").innerHTML = "Debug is Off";  
        } else { // show debugging is off, so turn it ON
            showDebug = true;
            document.getElementById("debugOnOff").innerHTML = "Debug is On";  
        }
    } // debugOnOff onclick event
}// end window onload event

function increment() { // for Stopwatch,use three variables to store mins, secs and hundreds
    if (running == 1 && timer == 0) {
        time++;
        var mins = Math.floor(time / 100 / 60);
        var secs = Math.floor(time / 100);
        var hundreds = time % 100;
        if (mins < 10) {
            mins = "0" + mins;
        }

        if (secs < 10){
            secs = "0" + secs;
        }
        if (secs > 60) {
            secs = secs % 60;
            if (secs < 10) {
                secs = "0" + secs;
            }
        }
        document.getElementById("output").innerHTML = mins + ":" + secs + ":" + hundreds;
    }     
}

function decrement() { // for Countdown, use three variable to store mins, secs and hundreds
    if (running == 1 && timer == 1 && time2 > 0) {
        var mins = Math.floor(time2 / 100 / 60);
        var secs = Math.floor(time2 / 100);
        var hundreds = time2 % 100;
        if (mins < 10) {
            mins = "0" + mins;
        }

        if (secs < 10) {
            secs = "0" + secs;
        }
        if (secs > 60) {
             secs = secs % 60;
            if (secs < 10) {
                secs = "0" + secs;
            }
        }
        document.getElementById("output").innerHTML = mins + ":" + secs + ":" + hundreds;  
        time2--;  
    }  if (running == 1 && timer == 1 && time2 == 0) {
        document.getElementById("output").innerHTML = "Time is up!!!!"; 
    }     
}
     
