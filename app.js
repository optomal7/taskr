var express = require('express');

var app = express();
const path = require('path')
const db = require('./database/db')
const bodyParser = require('body-parser')
var data = [{item: 'get milk'}, {item: 'get money'}, {item: 'build a kingdom'}];

require('./controllers/todoController')(app);

//set up template
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false }))

//static files using express static
app.use(express.static(path.join(__dirname, './public/')))

//fire controllers
// todoController(app)

//listen to port
app.listen(3001);
console.log('taskr is listening on port 3001!');
