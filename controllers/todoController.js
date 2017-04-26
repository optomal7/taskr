var bodyParser = require('body-parser');
var data = [{item: 'get milk'}, {item: 'get money'}, {item: 'build a kingdom'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var Tasks = require('../database/db.js')


module.exports = function(app){
	app.get('/todo', function(req, res){
		Tasks()
		.then(todos => {		
			res.render('todo', {todos: data});
		})
	});

	app.post('/todo', urlencodedParser, function(req, res){
		Tasks.create(req.body)
		console.log(req.body)
		data.push(req.body)
		console.log("this is the req", req.body)
		res.json(data)
	});

	app.delete('/todo/:item', function(req, res){
		data = data.filter(function(todo){
			return todo.item.replace(/ /g, '-') !== req.params.item;
		});
		res.json(data);
	});

};
