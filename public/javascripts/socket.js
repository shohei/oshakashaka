$(function(){
	//$.getScript("javascripts/audio.js");

	var socket = io.connect();
	//starting web socket
	socket.on('news_event', function(data){
		//console.log(data);
		alert(data["event_code"]);
	});

	socket.on('x_snare', function(data){
		if(data["usercount"] == 10){
		Play(data["soundId"]);
		navigator.notification.vibrate(1000);
	}
	$("#count"+data["soundId"]).text(data["usercount"]);

	})

	


});


