var app = require("./config/server");

var rotaHome = require("./app/routes/home")(app);

var rotaNews = require("./app/routes/news")(app);

var rotaFormulario_inclusao_news = require("./app/routes/formulario_inclusao_news")(app);

app.listen(3000, function(){
	console.log("Server running");
});