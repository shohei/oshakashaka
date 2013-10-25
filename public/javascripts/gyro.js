$(function(){
	var mobsocket = io.connect();

	var check = 0;
	window.addEventListener("devicemotion",function(evt){
	 	var x = evt.accelerationIncludingGravity.x; //
 		var y = evt.accelerationIncludingGravity.y; //
 		var z = evt.accelerationIncludingGravity.z; //
 		
 		if(x > 9){
 			check = 1;
 		}
		if(check == 1 && x < -5){
	 			mobsocket.emit('x_snare');
 				check = 0;
 		}
 		
 		$("#result_x").text("x:"+x);
 		$("#result_y").text("y:"+y);
 		$("#result_z").text("z:"+z);
 		mobsocket.emit('gyro_val', {x_val : x, y_val : y, z_val : z});
 	},false);

 	mobsocket.on('gyro_val', function(data){
 		$("#result_x2").text("x:"+ data["x_val"]);
 		$("#result_y2").text("y:"+ data["y_val"]);
 		$("#result_z2").text("z:"+ data["z_val"]);
 	});
	mobsocket.on("image_event",function(soundId){
		alert(soundId);
	 	$("#user_img").html("<img src='/images/jack"+soundId+"_proccessed.png' class='jack'>");    	 			 	
	})

});
