$(function(){

    var w = screen.width * 1.05;
    $("video#sample-video").attr("width", w);

	// var position = {1:{"top":"300px","left":"100px"},2:{"top":"100px","left":"300px"},3:{"top":"300px","left":"600px"},4:{"top":"70px","left":"700px"},5:{"top":"300px","left":"1000px"}};

	var fire_position = {1:{"top":"100px","left":"0px"},2:{"top":"0px","left":"100px"},3:{"top":"100px","left":"400px"},4:{"top":"0px","left":"500px"},5:{"top":"100px","left":"800px"}};


	var socket = io.connect();
	socket.on("desktop_image_event",function(soundId){

		var audio = new Audio("music/appear"+soundId+".wav");
		audio.play();
		$("#jack"+soundId).css("opacity",1);
		$("#jack"+soundId).effect("bounce",{"direction":"up","distance":400,"mode":"effect","times":30},500);
		//console.log("poxX:"+position[soundId]["left"]+", posY:"+position[soundId]["top"]);
   //  	$("#jack"+soundId).jrumble({
		 // 	 "posX": position[soundId]["left"],
		 // 	 "posY": position[soundId]["top"],
		 // 	speed: 0,
		 // 	rumbleEvent:"constant"
		 // });
		 // $("#jack"+soundId).trigger('startRumble');
	});
	socket.on("desktop_refresh",function(soundId){
		var audio = new Audio("/music/disappear"+soundId+".wav");
		audio.play();
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
		//var audio = new Audio("/music/gameclear.wav");
		//audio.play();

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
		console.log("fireworks fired! with "+currentMode);
		if(currentMode == "x"){
      	  console.log("XXXXXX!!!");
		  // $('#jack'+soundId+'_shadow').css("width","200px");//effect( 'explode', '', 700 );
  		//   $("#jack"+soundId+"_shadow").css("opacity",1);//effect( 'explode', '', 700 );
		  // $("#jack"+soundId+"_shadow").hide("puff",{}, 2000);
		} else if(currentMode == "y"){
		console.log("Y!!!");
		//$('#jack'+soundId+'_shadow').css("top",fire_position[soundId]["top"]);//effect( 'explode', '', 700 );
		// $('#jack'+soundId+'_shadow').css("left",fire_position[soundId]["left"]);//effect( 'explode', '', 700 );
		// $('#jack'+soundId+'_shadow').css("width","400px");//effect( 'explode', '', 700 );
		//$('#jack'+soundId+'_shadow').css("opacity",1);//effect( 'explode', '', 700 );
		//$('#jack'+soundId+'_shadow').hide("puff",{}, 4000);
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