$(function(){
	var mobsocket = io.connect();

	var check_x = 0;
	var check_y = 0;
	var check_z = 0;

	var currentMode;
	window.addEventListener("devicemotion",function(evt){
	 	var x = evt.accelerationIncludingGravity.x; //
 		var y = evt.accelerationIncludingGravity.y; //
 		var z = evt.accelerationIncludingGravity.z; // 		
 		if(currentMode == "x"){ 		  
     	  if(check_x == 0 && x > 9){
 			check_x = 1;
 		  } else if(check_x == 1 && x < -9){
 			mobsocket.emit('x_snare');
 			check_x = 0;
 		  }
 		} else if(currentMode == "y"){
     	    if(check_y == 0 && y > 9){
 			  check_y = 1;
 		    } else if(check_y == 1 && y < -9){
 			    mobsocket.emit('x_snare');
 			    check_y = 0;
 		    }
 		} else if(currentMode == "z"){
     	    if(check_z == 0 && z > 9){
 			  check_z = 1;
 		     } else if(check_z == 1 && z < -9){
 			  mobsocket.emit('x_snare');
 			  check_z = 0;
 		    } 	
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
	 	$("#user_img").html("<img src='/images/jack"+soundId+".jpg' class='jack'>");    	 		
	});



	mobsocket.on("switch_to_y",function(data){
		currentMode = "y";
	})
	mobsocket.on("switch_to_z",function(data){
		currentMode = "z";
	})
	mobsocket.on("switch_to_x",function(data){
		currentMode = "x";
	})



});
