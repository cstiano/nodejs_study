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
		var alunoSchema = mongoose.Schema({
			name: String,
			idade: Number,
			matricula: Number
		});

		var Aluno = mongoose.model('Aluno', alunoSchema);

		var addAluno = new Aluno(request.body);
		addAluno.save(function(err){
			if(err) console.log(err);
			else console.log("Saved on database.");
		});
	});
	mongoose.connect('mongodb://localhost/test');
	response.end("Finished");
});

app.listen(3000, function() {
	console.log("Server Runnig");
});