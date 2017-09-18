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

	newModel.getNew(function(error, result){
		response.render('news/new', {noticia : result});
	});
		
	// response.render('news/new', {noticia:});
}