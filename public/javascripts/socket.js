$(function(){
	//$.getScript("javascripts/audio.js");

	var socket = io.connect();
	//starting web socket
	socket.on('news_event', function(data){
		//console.log(data);
		alert(data["event_code"]);
	});

	socket.on('x_snare', function(data){
		Play(data);

	})

	
	//ardino state
	socket.on('pin_state', function(data){
		var state_val = data["state"] * 2;
		$("#freq").val(state_val);
		Setup();
	})


});


