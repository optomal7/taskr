var bodyParser = require('body-parser');
var data = [{item: 'get milk'}, {item: 'get money'}, {item: 'build a kingdom'}];
var complete = [{item: 'ate lunch'}]
var urlencodedParser = bodyParser.urlencoded({ extended: false});


module.exports = function(app){
	app.get('/todo', function(req, res){
		res.render('todo', {todos: data, complete});
	});

	app.post('/todo', urlencodedParser, function(req, res){
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
