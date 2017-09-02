module.exports = function(app){
	app.get('/new', function(request, response){
		var connection = app.config.dbConnection();
		var newModel = new app.app.models.NewsDAO(connection);

		newModel.getNew(function(error, result){
			response.render('news/new', {noticia : result});
		});
		
		// response.render('news/new', {noticia:});
	});
};