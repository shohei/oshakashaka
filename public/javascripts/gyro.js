$(function(){
	var mobsocket = io.connect();
	window.addEventListener("devicemotion",function(evt){
	 	var x = evt.accelerationIncludingGravity.x; //
 		var y = evt.accelerationIncludingGravity.y; //
 		var z = evt.accelerationIncludingGravity.z; //
 		if(x > 5){
 			mobsocket.emit('x_snare');
 			//Play();//doesnt work
 		}
 		$("#result_x").val("x:"+x);
 		$("#result_y").val("y:"+y);
 		$("#result_z").val("z:"+z);
 	},false);
});
