
if(typeof(webkitAudioContext)!=="undefined"){
    //alert('webkit');
    var audioctx = new webkitAudioContext();    
}
else if(typeof(AudioContext)!=="undefined"){
    //alert('normal');
    var audioctx = new AudioContext();    
}

var buffer = null;
LoadSample(audioctx, "/music/snare.wav");

//oscillator code
var play=0;
var osc = audioctx.createOscillator();
var gain = audioctx.createGain();
osc.connect(gain);
gain.connect(audioctx.destination);

//start oscillator
function StartOsc(){
    osc.start(0);
}
 
function Setup() {
    //var type = document.getElementById("type").selectedIndex;
    var freq = parseFloat(document.getElementById("freq").value);
    var level = parseFloat(document.getElementById("level").value);
 
    //osc.type = ["sine","square","sawtooth","triangle"][type];
    //osc.type = type;
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.value = level;
}

//play buffer
function Play() {
    //alert('ok');
    var src = audioctx.createBufferSource();
    src.buffer = buffer;
    src.connect(audioctx.destination);
    src.start(0);
}
//sample loading
function LoadSample(ctx, url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload = function() {
        if(req.response) {
            ctx.decodeAudioData(req.response,function(b){buffer=b;},function(){});
        }
        else
            buffer = ctx.createBuffer(VBArray(req.responseBody).toArray(), false);
    }
    req.send();
}


//jquery usage code
$(function(){
 //alert("loaded");
    $("#button").click(function(){
        Play();
    });

    $("#oscillator").click(function(){
        StartOsc();
    });


});



