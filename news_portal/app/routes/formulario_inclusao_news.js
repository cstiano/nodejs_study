module.exports = function(app){
	app.get('/formulario_inclusao_news', function(request, response){
		response.render("admin/form_add_noticia");
	});
}