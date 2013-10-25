$(function(){
	if ((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('iPhone') >0  && navigator.userAgent.indexOf('iPad') == -1)) {
    	//it doesn't work with Chrome mobile. work with Safari

    	//Smart phone
	 	$("#main").load("mobile.html",null,function(){
	 		$.getScript("javascripts/gyro.js");
	 		//alert("mobile client");
	 	});

	} else if (navigator.userAgent.indexOf('Android') > 0 || navigator.userAgent.indexOf('iPad') > 0){

	    //Tablet
	 	//alert("tablet client");    

	} else {

	    //PC
 		$("#main").load("desktop.html",null,function(){
	 		$.getScript("javascripts/desktop.js");
	 		//alert("desktop client");
	 	});
	}
});
