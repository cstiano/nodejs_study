var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));

app.post('/testPost', function(request,response){
	var db = mongoose.connection;
	db.on('error', console.error);
	db.once('open', function(){
		var busSchema = mongoose.Schema({
			placa: String,
			id_sensor: Number,
		});

		var Bus = mongoose.model('Bus', busSchema);

		var addBus = new Bus(request.body);
		addBus.save(function(err){
			if(err) console.log(err);
			else console.log("Saved on database.");
		});
	});
	mongoose.connect('mongodb://mobbipp_app:mobbipp0@ds161164.mlab.com:61164/mobbipp_db/fleet');
	response.end("Finished");
});

app.listen(3000, function() {
	console.log("Server Runnig");
});

//curl -H "Content-Type: application/json" -X POST -d '{"placa":"KJI2013","id_sensor":1}' http://localhost:3000/testPost