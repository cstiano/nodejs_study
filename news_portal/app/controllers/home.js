module.exports.index = function(app,request,response){
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NewsDAO(connection);

	noticiasModel.get5UltimasNoticias(function(error, result){
		response.render("home/index", {noticias : result});
	});
}