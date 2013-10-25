$(function(){
	//$.getScript("javascripts/audio.js");

	var socket = io.connect();
	//starting web socket
	socket.on('news_event', function(data){
		//console.log(data);
		//alert(data["event_code"]);
	});

	socket.on('x_snare', function(data){
		if(data["usercount"] % 10 == 0){
     		Play(data["soundId"]);
	}


	var usercount = Math.floor(parseInt(data["usercount"]) / 2 ) ;
	$("#count"+data["soundId"]).text(usercount);

	})

	


});


