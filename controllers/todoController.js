var bodyParser = require('body-parser');
var data = [{item: 'get milk'}, {item: 'get money'}, {item: 'build a kingdom'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false});


module.exports = function(app){
	app.get('/todo', function(req, res){
		res.render('todo', {todos: data});
	});

	app.post('/todo', urlencodedParser, function(req, res){
		data.push(req.body)
		console.log("this is the req", req.body)
		res.json(data)
	});

	app.delete('/todo', function(req, res){

	});

};