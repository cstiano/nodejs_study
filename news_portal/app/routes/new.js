module.exports = function(app){
	app.get('/new', function(request, response){
		var connection = app.config.dbConnection();

		connection.query('select * from noticias where id_noticias = 2', function(error, result){
			response.render('news/new', {noticia : result});
		});
		// response.render('news/new', {noticia:});
	});
};