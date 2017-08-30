module.exports = function(app){
	app.get('/news', function(request, response){
		response.render("news/news");
	});
}