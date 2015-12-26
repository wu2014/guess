window.onload = function(){
    // get random color for the box
	function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

	var clickedTime; 
    var createdTime; 
    var reactionTime;
    // make box with different shapes, positions and interval time
	function makeBox (){
		var time = Math.random();
		time = time * 1000;
		setTimeout(function(){
			if (Math.random() > 0.67) {
				document.getElementById("box").style.borderRadius = "50px";
			} else if (Math.random() > 0.33){
				document.getElementById("box").style.borderRadius = "25px";
			} else {
                document.getElementById("box").style.borderRadius = "0px";

            }
		    var top = Math.random();
		    top = top * 200;
		    var left = Math.random();
		    left = left * 800;
		    document.getElementById("box").style.top = top + "px";
		    document.getElementById("box").style.left = left + "px";
		    document.getElementById("box").style.backgroundColor = getRandomColor();
            document.getElementById("box").style.display = "block";
            createdTime = Date.now();
	    }, time); //end setTimeout()
	} // end function makeBox ()
	
	var totalReactions = 0;
	var timeAve = 0;
	var reactionTimeTotal = 0;
    // set click box function   
	document.getElementById("box").onclick = function(evt){ 
        clickedTime = Date.now();
        reactionTime = (clickedTime - createdTime)/1000;
        reactionTimeTotal = reactionTimeTotal + reactionTime;
        totalReactions = totalReactions + 1;
        timeAve = (reactionTimeTotal/ totalReactions).toPrecision(3);
        document.getElementById("timeThis").innerHTML = reactionTime; 
        this.style.display = "none";
        document.getElementById("totalReactions").innerHTML = totalReactions;
        document.getElementById("timeAve").innerHTML = timeAve;    
        makeBox();           
    } // end box onclick  

    // set click start button function  
    document.getElementById("start").onclick = function(evt){ 
        totalReactions = 0;
        timeAve = 0;
        reactionTimeTotal = 0;
        document.getElementById("timeThis").innerHTML = 0;
        document.getElementById("totalReactions").innerHTML = 0;
        document.getElementById("timeAve").innerHTML = 0;
        document.getElementById("results").style.display = "none";
        makeBox();
    } // end click start button  

    // set click stop button function
    document.getElementById("stop").onclick = function(evt){ 
        document.getElementById("box").style.display = "none";
        document.getElementById("results").style.display = "block";
        if (totalReactions == 0) { 
            document.getElementById("results").innerHTML = "Please click the box or circle to start!";  
        } else if (timeAve < 0.6) {
            document.getElementById("results").innerHTML = "Congratulation. You are super man!!!";
        } else if (timeAve < 0.7) {
            document.getElementById("results").innerHTML = "Great. You are above average level!!!";
        } else if (timeAve < 0.8) {
            document.getElementById("results").innerHTML = "Good. You are near average level!!!";    
        } else {
                document.getElementById("results").innerHTML = "A little bit slow, come on next time!!!";
        } 
    } // // end click stop button    
 
}// end window.onload