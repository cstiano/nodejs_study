var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

//body-parser funciona como um mideware

//Contrai informacao desse diretorio e inclui na raiz
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;