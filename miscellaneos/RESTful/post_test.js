var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var data = []; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));

app.post('/testPost', function(request,response){
	data = data.concat(request.body);
	console.log(data);
	response.end("Msg received");
	// response.send(data);
});

app.listen(3000, function() {
	console.log("Server Runnig");
});


//comand to send by terminal (debug)
//curl -H "Content-Type: application/json" -X POST -d '{"name":"Joesley","idade":35}' http://localhost:3000/testPost