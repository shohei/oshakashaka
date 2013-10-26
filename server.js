
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
var io = require('socket.io');
var app = module.exports = express.createServer();
var io = io.listen(app, {'log level': 2});

//Serial port
//var serialport = require('serialport');
//var portName = '/dev/tty.usbmodemfa131';
//var sp = new serialport.SerialPort(portName,{
//	baudRate: 9600,
//	dataBits: 8,
//	parity: 'none',
//	stopBits: 1,
//	flowControl: false,
//	parser: serialport.parsers.readline("\n")
//});

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/',routes.index);
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);


var usersound = {};
var usercount = {};
var currentMode = {};
// var lastValue = {};
// var lastlastValue = {};
//socket.io code
io.sockets.on('connection', function (socket) {
	socket.emit('news_event',{event_code : 'websocket is ready for '+socket.id});

	var soundId = Math.floor(Math.random()*5)+1;
	usersound[socket.id] = soundId;
	usercount[socket.id] = 0;
	currentMode[socket.id] = "x";
	// lastValue[socket.id] = 0;
	// lastlastValue[socket.id] = 0;
	console.log(usersound);

	socket.emit("image_event",usersound[socket.id]);
	socket.emit("switch_to_x");
	socket.broadcast.emit("desktop_image_event",usersound[socket.id]);

	socket.on('x_snare',function(data){
		// lastlastValue[socket.id] = lastValue[socket.id];
		// lastValue[socket.id] = data;
		usercount[socket.id] =  parseInt(usercount[socket.id]) + 1;
		//fireworks
		if(usercount[socket.id] % 10 == 0){
			socket.broadcast.emit("effect",{"soundId":soundId,"currentMode":currentMode[socket.id]});
		}
		if(usercount[socket.id] ==  60){
			var cmode = currentMode[socket.id];
			console.log(cmode);
			switch(cmode){
			  case "x":
   			    currentMode[socket.id] = "y";
			    socket.emit("switch_to_y");
			    console.log("switch to y");
			    socket.broadcast.emit("desktop_jack_shake",soundId);
			    //socket.broadcast.emit("desktop_ending",soundId);
			    //usercount[socket.id] = 0;
			    break;
			  case "y":
   			    currentMode[socket.id] = "z";
			    socket.emit("switch_to_z");
			    console.log("switch to z");
			    socket.broadcast.emit("desktop_jack_up",soundId);
			    //usercount[socket.id] = 0;
			    break;
   			  case "z":
   			    currentMode[socket.id] = "x";
			    socket.emit("switch_to_x");
			    console.log("switch to x");
			    socket.broadcast.emit("desktop_ending",soundId);
			    //usercount[socket.id] = 0;
    		    break;
			}
		}

		// socket.broadcast.emit('x_snare',{"soundId" : usersound[socket.id], "usercount" : usercount[socket.id],"lastValue":lastValue[socket.id],"lastlastValue":lastlastValue[socket.id]});
		socket.broadcast.emit('x_snare',{"soundId" : usersound[socket.id], "usercount" : usercount[socket.id]});
		console.log(usercount[socket.id]);
	});

	socket.on('gyro_val',function(data){
		socket.broadcast.emit('gyro_val',{x_val : data["x_val"], y_val : data["y_val"],z_val : data["z_val"]});
	});

	//add
	socket.on('mob_count',function(data){
		//console.log(data);
		socket.broadcast.emit("mob_count_write",data);
	});



	socket.on('disconnect', function () {
	 //  var flag = 1;
	 //  for(var sokid in usersound)
		// {
	 //      if(usersound[sokid] == usersound[socket.id])
	 //   	   {
	 //   	   	flag = 0;
  // 		    }
		// }
		// if(flag == 1){
	 //		socket.broadcast.emit("desktop_refresh",usersound[socket.id]);
 	 // 	}
		socket.broadcast.emit("desktop_refresh",usersound[socket.id]);
	 	//delete usersound[socket.id];
	 	console.log(usersound);
	});
});
