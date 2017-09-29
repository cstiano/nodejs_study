module.exports.iniciaChat = function (application, request, response) {
	
	var dadosForm = request.body;

	request.assert('apelido','Nome ou apelido eh obrigatorio').notEmpty();
	request.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15);

	var erros = request.validationErrors();

	if(erros){
		//Send finaliza processamento
		response.render("index", {validacao : erros});
		return;
	}

	response.render('chat');
}