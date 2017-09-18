module.exports = function(app){
	app.get('/formulario_inclusao_news', function(request, response){
		response.render("admin/form_add_noticia", {validacao :{}, noticia : {}});
	});

	app.post('/news/salvar', function(request, response){
		var noticia = request.body;

		request.assert('titulo','Titulo eh obrigatorio').notEmpty();
		request.assert('resumo','Resumo eh obrigatorio').notEmpty();
		request.assert('resumo','Resumo entre 10 e 100 caracteres').len(10,100);
		request.assert('autor','Autor eh obrigatorio').notEmpty();
		request.assert('data_noticia','Data eh obrigatorio').notEmpty();
		request.assert('noticia','Noticia eh obrigatorio').notEmpty();

		var errors = request.validationErrors();

		if(errors){
			//request.validationErrors() retorna um json
			response.render("admin/form_add_noticia", {validacao : errors, noticia : noticia});
			return;
		} 

		//recuperar conexao
		//recuperar model
		//enviar para uma funcao que salva noticias
		var connection = app.config.dbConnection();
		var newsModel = new app.app.models.NewsDAO(connection);

		newsModel.salvarNews(noticia,  function(error, result){
			response.redirect('/news');
		});
	});
}