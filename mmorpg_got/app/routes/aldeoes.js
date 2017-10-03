module.exports = function(application){
	application.get('/aldeoes', function(request,response){
		application.app.controllers.aldeoes.showAldeoes(application,request,response);
	});
}