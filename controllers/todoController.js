const Tasks = require('../database/db.js');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function(app){
	app.get('/todo', function(req, res){
		Tasks.getAll()
		.then(todos => {
			res.render('todo', {todos: todos});
		})
	});
	app.get('/', function(req, res){
		Tasks.getAll()
		.then(todos => {
			res.render('todo', {todos: todos});
		})
	});
	app.get('/test', function(req, res){
		Tasks.getAll()
		console.log(res.body)
		.then(todos => {
			res.render('test', {todos: todos});
		})
	})

	app.post('/todo', urlencodedParser, function(req, res){

		Tasks.create(req.body.item)
		.then(todos => {
			res.redirect('/todo');
		});
	});

	app.post('/todo/:item', function(req, res){
		Tasks.completed(req.params.item);
		res.redirect('/todo');
	});

	app.post('/delete/:item', function(req, res){
		Tasks.delete(req.params.item);
		res.redirect('/todo');
	});

	app.get('/edit/:item', function(req, res){
		Tasks.getOne(req.params.item)	

		.then(todos => {

			res.render('edit', {todos: todos});
			})
	});

	app.post('/edit/:item',urlencodedParser, function(req, res){
		let task = (req.body.item)
		let id = (req.params.item)

		Tasks.edited(id, task);
		res.redirect('/todo');
	});
};
