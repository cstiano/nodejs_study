function NewsDAO(connection){
	this._connection = connection;
}

NewsDAO.prototype.getNews = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NewsDAO.prototype.getNew = function(callback){
	this._connection.query('select * from noticias where id_noticias = 2', callback);
}

NewsDAO.prototype.salvarNews = function(noticia, callback){
	this._connection.query('insert into noticias set ?', noticia, callback);
}

NewsDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){
	return NewsDAO;
}