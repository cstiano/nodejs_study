module.exports.noticias = function(app,request,response){
	var connection = app.config.dbConnection();
	var newsModel = new app.app.models.NewsDAO(connection);

	newsModel.getNews(function(error, result){
		response.render("news/news", {noticias : result});
	});
}

module.exports.noticia = function(app,request,response){
	var connection = app.config.dbConnection();
	var newModel = new app.app.models.NewsDAO(connection);

	var id_noticia = request.query;
	console.log(id_noticia);

	newModel.getNew(id_noticia, function(error, result){
		response.render('news/new', {noticia : result});
	});
		
	// response.render('news/new', {noticia:});
}