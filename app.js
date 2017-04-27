var express = require('express');
var app = express();
const path = require('path')
const db = require('./database/db')
const bodyParser = require('body-parser')
var data = [{item: 'get milk'}, {item: 'get money'}, {item: 'build a kingdom'}];

// var todoController = require('./controllers/todoController')

//set up template
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false }))

app.get('/', (request, response) => {
	db.getAll()
	.then(todos => {
		response.render('todo', {todos: todos})
	})
})

app.post('/todo', (request, response) => {
	var task = request.body.item

	db.create(task)
	.then(todos => {
		response.redirect('/');
	})
})

app.delete('/todo/:id', (request, response) => {
	var id = request.params
	db.delete(id)

	.then(todos => {
		console.log(todos)
		response.send('Task deleted!')
	})
})
app.post('/complete/:id', (request, response) => {
	var id = request.params.id
	console.log('this is the put', id)

	db.completed(id)
	.then(todos => {
		response.redirect('/')
	})
})
//static files using express static
app.use(express.static(path.join(__dirname, './public/')))


//fire controllers
// todoController(app)

//listen to port
app.listen(3001);
console.log('taskr is listening on port 3001!');
