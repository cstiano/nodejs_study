// var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
	/*
	var connection = dbConnection();

	app.get('/news', function(request, response){
		connection.query('select * from noticias', function(error, result){
			response.render("news/news", {noticias : result});
		});
	});
	*/

	app.get('/news', function(request, response){
		var connection = app.config.dbConnection();

		connection.query('select * from noticias', function(error, result){
			response.render("news/news", {noticias : result});
		});
	});
}