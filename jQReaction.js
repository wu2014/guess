$(document).ready(function(){
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
				$('#box').css('border-radius', '50px');
			} else if (Math.random() > 0.33){
				$('#box').css('border-radius', '25px');
			} else {
                $('#box').css('border-radius', '0px');
            }
		    var top = Math.random();
		    top = top * 200;
		    var left = Math.random();
		    left = left * 800;
		    $('#box').css({'margin-top':top + 'px', 'margin-left':left + 'px', 'background-color':getRandomColor(), 'display':'block'}); 
            createdTime = Date.now();
	    }, time); //end setTimeout()
	}
	
	var totalReactions = 0;
	var timeAve = 0;
	var reactionTimeTotal = 0;
    // set click box function
	$('#box').click(function(){ 
        clickedTime = Date.now();
        reactionTime = (clickedTime - createdTime)/1000;
        reactionTimeTotal = reactionTimeTotal + reactionTime;
        totalReactions = totalReactions + 1;
        timeAve = (reactionTimeTotal/ totalReactions).toPrecision(3);
        $('#timeThis').html(reactionTime); 
        $(this).css('display', 'block');
        $('#totalReactions').html(totalReactions);
        $('#timeAve').html(timeAve); 
        makeBox(); 
    }); // end box onclick     
     
    // set click start button function   
    $('#start').click(function(){
        totalReactions = 0;
        timeAve = 0;
        reactionTimeTotal = 0;
        $('#timeThis').html('0');
        $('#totalReactions').html('0');
        $('#timeAve').html('0');
        $('#results').css('display', 'none');
        makeBox();
    }); // end click start button 
    
    // set click stop button function
    $('#stop').click(function(){
        $('#box').css('display', 'none');
        $('#results').css('display', 'block');
        if (totalReactions == 0) {
            $('#results').html("Please click the box or circle to start!");
        } else if (timeAve < 0.6) {
            $('#results').html("Congratulation. You are super man!!!");
        } else if (timeAve < 0.7) {
            $('#results').html("Great. You are above average level!!!");
        } else if (timeAve < 0.8) {
            $('#results').html("Good. You are near average level!!!");
        } else {
            $('#results').html("A little bit slow, come on next time!!!");
        }
    }); // end click stop button       
    
});// end window.ready