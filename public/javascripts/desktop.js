$(function(){

    var w = screen.width * 1.05;
    $("video#sample-video").attr("width", w);

	var socket = io.connect();
	socket.on("desktop_image_event",function(soundId){
		$("#jack"+soundId).css("opacity",1);
		$("#jack"+soundId).effect("bounce",{"direction":"up","distance":400,"mode":"effect","times":30},500);
		 $("#jack"+soundId).jrumble({
		 	speed: 0,
		 	rumbleEvent:"constant"
		 });
		 $("#jack"+soundId).trigger('startRumble');
	});
	socket.on("desktop_refresh",function(soundId){
		$("#jack"+soundId).css("opacity",0);		
	});
	socket.on("desktop_jack_blink",function(soundId){
		$("#jack"+soundId).fadeOut();				
		$("#jack"+soundId).fadeIn();				
		$("#jack"+soundId).fadeOut();				
		$("#jack"+soundId).fadeIn();				
		$("#jack"+soundId).fadeOut();				
		$("#jack"+soundId).fadeIn();				
	});
	socket.on("desktop_ending",function(soundId){
		//blink
		$("#jack"+soundId).fadeOut();				
		$("#jack"+soundId).fadeIn();				
		$("#jack"+soundId).fadeOut();				
		$("#jack"+soundId).fadeIn();				
		$("#jack"+soundId).fadeOut();				
		$("#jack"+soundId).fadeIn();				

		$('video')[0].pause();
		$("#videoarea").html("");
		$("#videoarea").html('<video id="ending-video" autoplay><source src="/video/ending.mp4"></video>');

		$("#dotpattern").remove();
		var w = screen.width * 1.05;
		$("video#ending-video").attr("width", w);

	});

	socket.on("desktop_jack_shake",function(soundId){
		$("#jack"+soundId).effect("bounce",{"direction":"up","distance":200,"mode":"effect","times":10},100);
	});
	socket.on("desktop_jack_up",function(soundId){
		$("#jack"+soundId).effect("shake",{},170);
	});
	socket.on("desktop_jack_rotate",function(soundId){

	});

	socket.on("effect",function(data){
		var soundId = data["soundId"];
		var currentMode = data["currentMode"];
		if(currentMode == "x"){
  		  $("#jack"+soundId+"_shadow").css("opacity",1);//effect( 'explode', '', 700 );
		  $("#jack"+soundId+"_shadow").hide("puff", {"percent": 200}, 2000);
		} else if(currentMode == "y"){
		$('#jack'+soundId+'_shadow').css("top","200px");//effect( 'explode', '', 700 );
		$('#jack'+soundId+'_shadow').css("left","200px");//effect( 'explode', '', 700 );
		$('#jack'+soundId+'_shadow').css("width","600px");//effect( 'explode', '', 700 );
		$('#jack'+soundId+'_shadow').css("opacity",1);//effect( 'explode', '', 700 );
		$('#jack'+soundId+'_shadow').hide("puff", {"percent": 200}, 2000);
		}
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