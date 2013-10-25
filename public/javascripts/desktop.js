$(function(){
	alert('desktop.js');
	var socket = io.connect();
	socket.on("desktop_image_event",function(soundId){
		$("#jack"+soundId).css("opacity",1);
	socket.on("desktop_refresh",function(soundId){
		$("#jack"+soundId).css("opacity",0.3);		
	});
	socket.on("desktop_jack_blink",function(soundId){
		$("#jack"+soundId).fadeOut();				
		$("#jack"+soundId).fadeIn();				
		$("#jack"+soundId).fadeOut();				
		$("#jack"+soundId).fadeIn();				
		$("#jack"+soundId).fadeOut();				
		$("#jack"+soundId).fadeIn();				
	})

	});

	// var hoge = 1
	//  	switch (hoge){
	//  	case 1 :
	//  	$("#user_img").html("<img src='../images/jack1.jpg' class='jack'>");    	 		
	//  	break; 
	//  	case 2 :
	//  	$("#user_img").html("<img src='../images/jack2.jpg' class='jack'>");    	 		
	//  	break; 
	//  	case 3 :
	//  	$("#user_img").html("<img src='../images/jack3.jpg' class='jack'>");    	 		
	//  	break; 
	//  	} 

});