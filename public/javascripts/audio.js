if(typeof(webkitAudioContext)!=="undefined"){
    //alert('webkit');
    var audioctx = new webkitAudioContext();    
}
else if(typeof(AudioContext)!=="undefined"){
    //alert('normal');
    var audioctx = new AudioContext();    
}

var buffer = null;
//LoadSample(audioctx, "/music/bell.wav");
/*var jackmode = $(".jack").attr("alt");
console.log(jackmode);
*/  
//var jackmode = Math.floor(Math.random() * 3) +1;
//console.log(jackmode);
//LoadSample(audioctx, "/music/"+jackmode+".wav");
 
//play buffer
function Play(soundId) {
    // var src = audioctx.createBufferSource();
    // src.buffer = buffer;
    // src.connect(audioctx.destination);
    // src.start(0);
    var audio = new Audio("/music/"+soundId+".wav");    
    audio.play();
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


