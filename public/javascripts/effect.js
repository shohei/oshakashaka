$(function(){
	//xxx	alert("loaded");
	$("#button1").click(function(){
		$("#jack1").css("opacity",1);
		alert("button1");
	});
	$("#button2").click(function(){
		$("#jack2").css("opacity",1);
		alert("button2");
	});
	$("#button3").click(function(){
		$("#jack3").css("opacity",0.4);
		alert("button3");
	});

	$("#button").click(function(){
		$('#button').illuminate({
			'intensity': '0.3',
			'color': '#98cb00',
			'blink': 'true',
			'blinkSpeed': '1200',
			'outerGlow': 'true',
			'outerGlowSize': '30px',
			'outerGlowColor': '#98cb00'
		});
	});
});