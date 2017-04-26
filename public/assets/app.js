var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template
app.set('view engine', 'ejs');

//static files using express static
app.use(express.static('./public'))

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('taskr is listening on port 3000!');
