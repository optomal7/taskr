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
		console.log('an http post request was recieved at the endpoint/route "/todo"')
		console.log("this is the req body", req.body)
		console.log("this is typeof req body", typeof req.body)
		console.log("this is the req body item, this is what we want to put in the database-->", req.body.item)

		Tasks.create(req.body.item)
		.then(todos => {
			res.redirect('/todo');
		})
		// console.log(req.body)
		// data.push(req.body)
		// res.json(data)


	});

	app.post('/todo/:item', function(req, res){
		console.log('an http post request was recieved at the endpoint/route "/todo:item"')
		Tasks.completed(req.params.item);
		res.redirect('/todo');
	});

	app.delete('/todo/:item', function(req, res){
		console.log('an http delete request was recieved at the endpoint/route "/todo:item"')
		data = data.filter(function(todo){
			return todo.item.replace(/ /g, '-') !== req.params.item;
		});
		res.json(data);
	});

};
