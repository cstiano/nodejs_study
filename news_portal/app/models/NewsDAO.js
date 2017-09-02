function NewsDAO(connection){
	this._connection = connection;
}

NewsDAO.prototype.getNews = function(callback){
	this._connection.query('select * from noticias', callback);
}

NewsDAO.prototype.getNew = function(callback){
	this._connection.query('select * from noticias where id_noticias = 2', callback);
}

NewsDAO.prototype.salvarNews = function(noticia, callback){
	this._connection.query('insert into noticias set ?', noticia, callback);
}

module.exports = function(){
	return NewsDAO;
}