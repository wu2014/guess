var showDebug = true;
window.onload = function() {
    if (showDebug) {
        document.getElementById("debugOnOff").innerHTML = "Debug is On";
    } else {
        document.getElementById("debugOnOff").innerHTML = "Debug is Off";
    } 

    document.getElementById("img1").onclick = function(evt) {
        var numberInput = document.getElementById("userInput1").value;
        var output = processNumber(numberInput);
        if (showDebug) {
            document.getElementById("eventOutput").innerHTML += "<p>" + "Hello, You clicked img1, " + 
            "and your input is " +  numberInput + "." + "<p>" + "The field you used is userInput1. " + output + "</p>"; 
        }   
    } // img1 onclick event  
           
    document.getElementById("img2").onclick = function(evt) {
        var numberInput2 = document.getElementById("userInput2").value;
        var output2 = processNumber2(numberInput2);
        if (showDebug) {
            document.getElementById("eventOutput").innerHTML += "<p>" + "Hello, You clicked img2, " + 
            "and your input is " +  numberInput2 + "." + "<p>" + "The field you used is userInput2. " + output2 + "</p>"; 
        }   
    } // img2 onclick event
 
    document.getElementById("debugOnOff").onclick = function(evt) {
        if (showDebug) { // show debugging is ON, so turn it off
            showDebug = false;
            document.getElementById("debugOnOff").innerHTML = "Debug is Off";  
        } else { // show debugging is off, so turn it ON
            showDebug = true;
            document.getElementById("debugOnOff").innerHTML = "Debug is On";  
        }
    } // debugOnOff onclick event 
} // end window onload event 

function processNumber(number) { 
    var output = "";
    if (isNaN(number)) {  // test wether it is a number
        output = "Sorry-Your input is not a number, please enter a number from 1 to 5, and image was not updated.";
    } else if (number < 1 || number > 5) { // test for valid input number from 1 to 5
        output = "Your number is not in correct range, and image was not updated.";
    } else if (number == 1) {
        document.getElementById("img1").src = "one.gif";
        output = "Your number is in correct range and image updated to one.";
    } else if (number == 2) {
        document.getElementById("img1").src = "two.gif";
        output = "Your number is in correct range and image updated to two.";
    } else if (number == 3) {
        document.getElementById("img1").src = "three.gif";
        output = "Your number is in correct range and image updated to three.";
    } else if (number == 4) {
        document.getElementById("img1").src = "four.gif";
        output = "Your number is in correct range and image updated to four.";
    } else  { 
        document.getElementById("img1").src = "five.gif";
        output = "Your number is in correct range and image updated to five.";
    }   
    return output;
} // end function processNumber()

function processNumber2(number2) {
    var output2 = "";
    if (isNaN(number2)) {  // test wether it is a number
        output2 = "Sorry-Your input is not a number, please enter a number from 1 to 5, and image was not updated.";
    }
    if (number2 < 1 || number2 > 5) { // test for valid input number from 1 to 5
        output2 = "Your number is not in correct range,  and image was not updated.";  
    }

    switch (number2) {
        case "1": document.getElementById("img2").src = "one.gif";
                output2 = "Your number is in correct range and image updated to one.";
                break;
        case "2": document.getElementById("img2").src = "two.gif";
                output2 = "Your number is in correct range and image updated to two.";
                break;
        case "3": document.getElementById("img2").src = "three.gif";
                output2 = "Your number is in correct range and image updated to three.";
                break;
        case "4": document.getElementById("img2").src = "four.gif";
                output2 = "Your number is in correct range and image updated to four.";
                break;
        case "5": document.getElementById("img2").src = "five.gif";
                output2 = "Your number is in correct range and image updated to five.";
                break;         
    } // end switch (number2)
    return output2;
} // end function processNumber2()