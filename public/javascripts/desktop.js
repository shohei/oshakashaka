$(function(){

	alert('desktop.js');
    var w = screen.width * 1.05;
    $("video#sample-video").attr("width", w);

	var socket = io.connect();
	socket.on("desktop_image_event",function(soundId){
		$("#jack"+soundId).css("opacity",1);
		// $("#jack"+soundId).jrumble({
		// 	speed: 20
		// });
		// $("#jack"+soundId).trigger('startRumble');
	});
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
	});
	socket.on("desktop_jack_shake",function(soundId){
		$("#jack"+soundId).effect("bounce",{"direction":"up","distance":200,"mode":"effect","times":10},100);
	});
	socket.on("desktop_jack_up",function(soundId){
		$("#jack"+soundId).effect("shake",{},170);
	});
	socket.on("desktop_jack_rotate",function(soundId){

	});


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