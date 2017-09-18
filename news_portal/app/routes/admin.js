module.exports = function(app){
	app.get('/formulario_inclusao_news', function(request, response){
		app.app.controllers.admin.formulario_inclusao_news(app,request,response);
	});

	app.post('/news/salvar', function(request, response){
		app.app.controllers.admin.news_salvar(app,request,response);
	});
}