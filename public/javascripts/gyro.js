$(function(){
	var mobsocket = io.connect();
	window.addEventListener("devicemotion",function(evt){
	 	var x = evt.accelerationIncludingGravity.x; //
 		var y = evt.accelerationIncludingGravity.y; //
 		var z = evt.accelerationIncludingGravity.z; //
 		if(x > 9){
 			mobsocket.emit('x_snare');
 			//Play();//doesnt work
 		}
 		$("#result_x").text("x:"+x);
 		$("#result_y").text("y:"+y);
 		$("#result_z").text("z:"+z);
 		mobsocket.emit('gyro_val', {x_val : x, y_val : y, z_val : z});
 	},false);

 	mobsocket.on('gyro_val', function(data){
 		$("#result_x2").text("x2:"+ data["x_val"]);
 		$("#result_y2").text("y2:"+ data["y_val"]);
 		$("#result_z2").text("z2:"+ data["z_val"]);
 	});
});
