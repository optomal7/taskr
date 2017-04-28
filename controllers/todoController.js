var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var Tasks = require('../database/db.js')


module.exports = function(app){
	app.get('/todo', function(req, res){
		console.log('an http get request was recieved at the endpoint/route "/todo"')
		Tasks.getAll()
		.then(todos => {
			res.render('todo', {todos: todos});
		})
	});

	app.post('/todo', urlencodedParser, function(req, res){

		Tasks.create(req.body.item)
		.then(todos => {
			res.redirect('/todo');
		})
	});

	app.post('/todo/:item', function(req, res){
		Tasks.completed(req.params.item);
		res.redirect('/todo');
	});

	app.post('/delete/:item', function(req, res){
		Tasks.delete(req.params.item);
		res.redirect('/todo');
	});
};
