/*Importar configuracoes do servidor*/
var app = require('./config/server');

/*Parametrizar a porta de escuta*/
var server = app.listen(3000, function() {
	// body...
	console.log("Server running");
});

var io = require('socket.io').listen(server);

app.set('io',io);

/* Criar a conexão por websocket */
io.on('connection', function(socket){
	console.log('User connected');

	socket.on('disconnect',function(){
		console.log('User disconnected');
	});

	socket.on('msgParaServidor', function(data){
		socket.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem : data.mensagem}
		);
		socket.broadcast.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem : data.mensagem}
		);
	});
});