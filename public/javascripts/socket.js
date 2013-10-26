$(function(){
	//$.getScript("javascripts/audio.js");
	var position = {1:{"top":"300px","left":"100px"},2:{"top":"100px","left":"300px"},3:{"top":"300px","left":"600px"},4:{"top":"70px","left":"700px"},5:{"top":"300px","left":"1000px"}};


	var socket = io.connect();
	//starting web socket
	socket.on('news_event', function(data){
		//console.log(data);
		//alert(data["event_code"]);
	});

	socket.on('x_snare', function(data){
		//$("#jack"+data["soundId"]).yurayura({"move":50,"delay":10,"duration":1000});
		var soundId = data["soundId"];

    	$("#jack"+soundId).jrumble({
		 	 "posX": position[soundId]["left"],
		 	 "posY": position[soundId]["top"],
		 	speed: 0,
		 	rumbleEvent:"constant"
		 });
		 $("#jack"+soundId).trigger('startRumble');
		 console.log("poxX:"+position[soundId]["left"]+", posY:"+position[soundId]["top"]);
		//$("#jack"+data["soundId"]).trigger("hover");


		var audio = new Audio("/music/tap1.wav");
		audio.play();
		if(data["usercount"] % 40 == 0){
     		Play(data["soundId"]);
	}


	var usercount = Math.floor(parseInt(data["usercount"]) / 2 ) ;
	  $("#count"+data["soundId"]).text(usercount);
	  //add
	  //alert(usercount);
	  // socket.broadcast.emit("mobile_count", usercount);
	  socket.emit("mob_count", usercount);

	});

	


});


