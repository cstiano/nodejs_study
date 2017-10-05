var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){
	var alunoSchema = mongoose.Schema({
		name: String,
		idade: Number,
		matricula: Number
	});

	var Aluno = mongoose.model('Aluno', alunoSchema);

	// var cris = new Aluno({
	// 	name: 'Maria',
	// 	idade: 23
	// });

	// cris.save(function(err,cris){
	// 	if(err) console.log(err);
	// 	else {
	// 		console.log("Saved");
	// 		console.dir(cris);
	// 	}
	// });

	Aluno.find({name:"Maria"}, function(err,encontrado){
		if(err) return console.log(err);
		console.log(encontrado);
	});

});

mongoose.connect('mongodb://localhost/test');