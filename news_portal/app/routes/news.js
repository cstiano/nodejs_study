module.exports = function(app){
	app.get('/news', function(request, response){
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'cristiano',
			password : 'cristiano',
			database : 'portal_noticias'
		});

		connection.query('select * from noticias', function(error, result){
			response.render("news/news", {noticias : result});
		});
	});
	// app.get('/news', function(request, response){
	// 	response.render("news/news");
	// });
}