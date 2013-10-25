$(function(){
	if ((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('iPhone') >0  && navigator.userAgent.indexOf('iPad') == -1)) {
    	//it doesn't work with Chrome mobile. work with Safari

    	//Smart phone
	 	$("#main").load("mobile.html");
	 	alert("mobile client");
	 	//#user_img tag is needed to be in index.jade
	 	//need switch sentence to judge serial id like 
	 	/*
	 	switch (serial id){
	 	case hoge1 :
	 	$("#user_img").html("<img src='../images/jack1.jpg' class='jack'>");    	 		
	 	break; 
	 	case hoge2 :
	 	$("#user_img").html("<img src='../images/jack2.jpg' class='jack'>");    	 		
	 	break; 
	 	case hoge3 :
	 	$("#user_img").html("<img src='../images/jack3.jpg' class='jack'>");    	 		
	 	break; 
	 	} 
	 	*/
	 	$("#user_img").html("<img src='../images/jack2_proccessed.png' class='jack'>");    

	} else if (navigator.userAgent.indexOf('Android') > 0 || navigator.userAgent.indexOf('iPad') > 0){

	    //Tablet
	 	alert("tablet client");    

	} else {

	    //PC
 		$("#main").load("desktop.html");
	 	alert("desktop client");
	}

});
