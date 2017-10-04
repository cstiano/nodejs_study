var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var data = ''; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));

app.post('/testPost', function(request,response){
	data += request.body;
	console.log(JSON.stringify(data));
	// response.send(data);
});

app.listen(3000, function() {
	console.log("Server Runnig");
});