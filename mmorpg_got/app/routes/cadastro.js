module.exports = function(application){
	application.get('/cadastro', function(request,response){
		application.app.controllers.cadastro.showCadastro(application,request,response);
	});
}