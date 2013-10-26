$(function(){
	//$.getScript("javascripts/audio.js");

	var socket = io.connect();
	//starting web socket
	socket.on('news_event', function(data){
		//console.log(data);
		//alert(data["event_code"]);
	});

	socket.on('x_snare', function(data){
		//$("#jack"+data["soundId"]).yurayura({"move":50,"delay":10,"duration":1000});
		$("#jack"+data["soundId"]).trigger("hover");
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


