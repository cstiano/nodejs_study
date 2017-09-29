/*Importar configuracoes do servidor*/
var app = require('./config/server');

/*Parametrizar a porta de escuta*/
app.listen(3000, function() {
	// body...
	console.log("Server running");
});