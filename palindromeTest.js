function palindromeTest() {
    var word = document.getElementById("userInput").value;
    var userGreeting = "";
    if (validateInput(word)) {
        userGreeting = "<p>Your input is valid!</p>";
        if (word == reverse2(word)) {
            userGreeting += "<p>It is a palindrome!</p>";
        } else {
            userGreeting += "<p>It is not a palindrome!</p>";
        }
    } else if (word.length > 10) {
        userGreeting = "Your input is too long!";
    } else userGreeting = "Your input is too short!";
    
    document.getElementById("output").innerHTML = userGreeting;   
} // end Function palindromeTest()

// validate userInput
function validateInput(userInput2) {
    if (userInput2.length > 2 && userInput2.length < 11) return true;
    else return false;
    } // end function validateInput() 

//reverse userInput
function reverse2(s) {
    var reversedSrting = "";
    for (var i = s.length - 1;  i >= 0; i--) {
        reversedSrting += s[i];    
    }
    return reversedSrting;
} // end function reverse2

window.onload = function () {
    document.getElementById("userButton").onclick = function(evt) {
        palindromeTest();
    } // userButton onclick event
} //  end function onload      

