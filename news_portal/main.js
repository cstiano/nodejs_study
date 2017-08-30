var http = require("http");

var server = http.createServer(function(request, response){
	var cat = request.url;

	if(cat=="/technology"){
		response.end("<html><body>Technology News</body></html>");
	}else if(cat=="/science"){
		response.end("<html><body>Science News</body></html>");
	}else if(cat=="/politics"){
		response.end("<html><body>Politics News</body></html>");
	}else{
		response.end("<html><body>News Portal</body></html>");
	}
});

server.listen(3000);