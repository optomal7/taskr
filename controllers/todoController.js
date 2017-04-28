var bodyParser = require('body-parser');
var data = [{item: 'get milk'}, {item: 'get money'}, {item: 'build a kingdom'}];
var complete = [{item: 'ate lunch'}]
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
		// console.log(req.body)
		// data.push(req.body)
		// res.json(data)


	});

	app.post('/todo/:item', function(req, res){
		Tasks.completed(req.params.item);
		res.redirect('/todo');
	});

	app.post('/delete/:item', function(req, res){
		Tasks.delete(req.params.item);
		res.redirect('/todo');
	});

	app.get('/bob/:item', function(req, res){
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

	// app.delete('/todo/:item', function(req, res){
	// 	console.log('an http delete request was recieved at the endpoint/route "/todo:item"')
	// 	data = data.filter(function(todo){
	// 		return todo.item.replace(/ /g, '-') !== req.params.item;
	// 	});
	// 	res.redirect('/todo');
	// });

};
